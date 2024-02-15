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
const life=document.getElementById("life");
const score=document.getElementById("score");
const finalScore=document.getElementById("final-score");

function continueGame(){
    const alphabet=getARandomAlphabet();
    const screen=document.getElementById("screen");
    screen.innerText=alphabet;
    setBackgroundColor(alphabet);
    document.addEventListener("keyup",keyboardButtonPress);
    }

function keyboardButtonPress(event){
    const pressed=event.key;
        console.log("player pressed",pressed);
        const alphabet=document.getElementById("screen").innerText.toLowerCase();
        if (pressed===alphabet){
            score.innerText++;
            continueGame();
            removeBackgroundColor(alphabet);
        }
        else if(pressed==="Escape"){
            finalScore.innerText=score.innerText;
                removeBackgroundColor(alphabet);
                addHidden("ground");
                showHidden("scores");
        }
        else{
            life.innerText--;
            if (life.innerText==0){
                finalScore.innerText=score.innerText;
                removeBackgroundColor(alphabet);
                addHidden("ground");
                showHidden("scores");
            }
            else{
            removeBackgroundColor(alphabet);
            continueGame();
            
            }
        }
        // if (pressed===alphabet){
        //     score.innerText++;
        //     console.log("right");
        //     continueGame();
        //     removeBackgroundColor(alphabet);
        // }
        // else{
        //     console.log("left");
        //     finalScore.innerText=score.innerText;
        //     removeBackgroundColor(alphabet);
        //     addHidden("ground");
        //     showHidden("scores");
        //     life.innerText--;
        // }
}

    //keyboard key buttons capture.
// document.addEventListener("keyup",keyboardButtonPress);
function match(elementId){
    const element=document.getElementById(elementId);
    element.addEventListener("click",function(){
        removeBackgroundColor(element);
    })
}
  
const btn=document.getElementById("btn-1");
btn.addEventListener("click",function(){

    continueGame();
    addHidden("scores");
    showHidden("ground");
    finalScore.innerText=0;
    score.innerText=0;
    life.innerText=3;
});
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
