let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let PassBox = document.getElementById("PassBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");


// Showing input slider value
sliderValue.textContent = inputSlider.ariaValueMax;
inputSlider.addEventListener('input', ()=>{
    sliderValue.textContent = inputSlider.ariaValueMax;
});

genBtn.addEventListener('click', ()=>{
    PassBox.value = generatePassward();
})

let lowerchars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*";

// Function to generate Passward
function generatePassward(){
    let genPassward = "";
    let allChars = "";

    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += symbols.checked ? allsymbols : "";


    if(allChars == "" || allChars.length == 0){
        return genPassward;
    }


    let i = 1;
    while(i<=inputSlider.value){
        genPassward = allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }
    
    return genPassward;
}

copyIcon.addEventListener('click', ()=>{
    if(PassBox.value != "" || PassBox.value.length >=1){
    navigator.clipboard.writeText(PassBox.value);
    copyIcon.innerText = "check";
    copyIcon.title = "Passward Copied";

    setTimeout(()=>{
        copyIcon.innerHTML = "content_copy";
        copyIcon.title = "";
    }, 3000)
}
});