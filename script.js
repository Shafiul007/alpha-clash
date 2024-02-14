// function play(){
//    const home=document.getElementById("home");
//    home.classList.add("hidden");
//    const ground=document.getElementById("ground");
//    ground.classList.remove("hidden");
// }

// function playAgain(){
//     const score=document.getElementById("score");
//     score.classList.remove("hidden");
//     const ground=document.getElementById("ground");
//     ground.classList.add("hidden");
// }

function play(){
    addHidden("home");
    showHidden("ground");
    continueGame();
}

function addHidden(elementId){
    const element=document.getElementById(elementId);
    element.classList.add("hidden");
}
function showHidden(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove("hidden");
}

function continueGame(){
    const alphabet=getARandomAlphabet();
    const screen=document.getElementById("screen");
    screen.innerText=alphabet;
    setBackgroundColor(alphabet);
    
    
}
function setBackgroundColor(elementId){
    const element=document.getElementById(elementId);
    element.classList.add("bg-orange-400");
}
function removeBackgroundColor(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove("bg-orange-400");
}
function getARandomAlphabet(){
    const alphabets='abcdefghijklmnopqrstuvwxyz';
    const alphabet=alphabets.split("");
    const randomNumber=Math.random()*25;
    const index=Math.round(randomNumber);
    const letter=alphabet[index];
    return letter;
}