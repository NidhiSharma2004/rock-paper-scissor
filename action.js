
let handOptions = {
    "rock":"/assets/Rock.png",
    "paper":"/assets/Paper.png",
    "scissors":"./assets/Scissors.png"
}
let SCORE = 0;

//  main function
const pickUserHand = (hand) => {
    
    // remove all images
    let hands = document.querySelector(".hands")
    hands.style.display="none"

    // show next page with the hand you pick
    let contest = document.querySelector(".contest")
    contest.style.display="flex"  // yha flex isliye use kiya hai kyuki hmne styling iskiflex use kr ke ki h

    // set user pik image

                 // FIRST WAY

    // let userPickImage = document.getElementById("userPickImage")
    // if(hand == "rock"){
    //     userPickImage.src="./assets/Rock.png"
    // } else if(hand == "paper"){
    //     userPickImage.src="./assets/paper.png"
    // }else{
    //     userPickImage.src="./assets/scissors.png" 
    // }

                 // SECOND WAY
    
    document.getElementById("userPickImage").src=handOptions[hand]
    // ye phele hand ki value check krega ki rock ha etc
    // jaise upper if else mein hmne karvaye thhi
    // phir uske baad ye handOptions p jayega or uski keyvalue
    // pair check krega or pastekr dega 

   let cpHand = pickCompterHand()
   refree(hand,cpHand)
//    playAgain();
}

const pickCompterHand = () =>{
    let hands = ["rock","paper","scissors"];
    let cpHand = hands[Math.floor(Math.random()*3)]
    // hand isliye use kiya h taki ye elemnt de ske 
    // math wala no index dega hands elemt m convert kr dega 

    document.getElementById("computerPickImage").src=handOptions[cpHand];

    // we here jo computer pick krega uska src ya key value pair typ krvaenge;
    return cpHand // taki store kr skr

}

const refree = (hand,cpHand) =>{
     if(hand=="scissors"&&cpHand=="rock"){
         setDecision("you lose!");
     }
     if(hand=="rock"&&cpHand=="paper"){
        setDecision("you lose!");
    }
    if(hand=="paper"&&cpHand=="scissors"){
        setDecision("you lose!");
    }
    if(hand=="rock"&&cpHand=="rock"){
        setDecision("tied!");
    }
     if(hand=="scissors"&&cpHand=="scissors"){
        setDecision("tied!");
    }
    if(hand=="paper"&&cpHand=="paper"){
        setDecision("tied!")
    }
     if(hand=="paper"&&cpHand=="rock"){
        setDecision("you win!")
        setScore(SCORE+1);
    }
    if(hand=="rock"&&cpHand=="scissors"){
        setDecision("you win!")
        setScore(SCORE+1);
    }
    if(hand=="scissors"&&cpHand=="paper"){
        setDecision("you win!")
        setScore(SCORE+1);
    }
}

const setDecision = (decision) =>{

    document.querySelector(".decision").innerHTML=decision;
    
}

const setScore = (score) =>{
    SCORE=score
    document.querySelector(".number").innerHTML=score;  
}

const playAgain = () =>{
    // document.querySelector(".number").innerHTML="0";
    let contest = document.querySelector(".contest")
    contest.style.display="none" ;  
    let hands = document.querySelector(".hands")
    hands.style.display="flex"
}
