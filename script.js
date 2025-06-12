const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const msg = document.getElementById("message");

// song
const yesSound = document.getElementById("yesSound");
const noSound = document.getElementById("noSound");

let heartRainstarted = false
yesBtn.addEventListener("click",()=>{
    
    msg.innerText ="I knew it!😍 Love You too ❤️😘...";
   

    yesSound.play();

    if(!heartRainstarted){
        setInterval(createHeart,300);
        heartRainstarted =true
    }
    
})

//  move the no button

function moveNOBtn(){
    const i = Math.floor(Math.random()* (window.innerWidth - noBtn.offsetWidth));
    const j = Math.floor(Math.random()* (window.innerHeight - noBtn.offsetHeight));
    noBtn.style.left = i + "px";
    noBtn.style.top = j + "px";
}
noBtn.addEventListener("mouseover",moveNOBtn);
noBtn.addEventListener("touchstart",(e)=>{
    e.preventDefault();
    moveNOBtn();
});

// when try click no button , move this 

function createHeart(){
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "💖";


    // const randomColor = colors[Math.floor(Math.random()*colors.length)];
    // heart.style.color = randomColor;

    heart.style.left = Math.random()*100 + "vw";
    heart.style.animationDuration = (Math.random()*3+4)+ "s";
    document.body.appendChild(heart);
    setTimeout(()=>{
        heart.remove();
    },4000)
}


