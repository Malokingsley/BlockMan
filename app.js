let blockMan = document.getElementById('blockMan');
let block = document.getElementById('block');
 const blockMoveSound = new Audio('Audio/blockmoves.wav')
const hitSound = new Audio('Audio/explosion.wav')
const jumpSound = new Audio('Audio/jump.wav')
const loseSound = new Audio('Audio/you-lose.wav')
function jump(){
    if(blockMan.classList != "animate"){ 
        jumpSound.play()
        
    }
    blockMan.classList.add("animate");
    setTimeout(function(){
        blockMan.classList.remove("animate");
        
    }, 450);
}

// Hit detect
function hit(){}
let checkDead = setInterval(function() {
    let blockManTop =
    parseInt(window.getComputedStyle(blockMan).getPropertyValue('top'));
    //parseint to get just int(number)
    let blockLeft =
    parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    //parseint to get just int(number)
    let blockManRight =
    parseInt(window.getComputedStyle(blockMan).getPropertyValue('right'));
    
    
    if(blockLeft < blockManTop && blockLeft == 205 && blockManTop == 575 && blockManRight >= 200 && blockLeft != 200){
        // if the block.x is less then blockman.right??
        block.style.animation = "none";
        block.style.display = "none";
        //console.log("Top" + blockManTop,"Right" + blockManRight,"block Left" + blockLeft);
        
        hitSound.play()
    
        alert ("you lose")
        
    } else if (blockLeft <= 0 && blockManTop != 200) {
        
        // console.log(blockManTop, blockLeft)
        //alert('you win')
        
        
    }
    
function blockMoves(){
        if (blockLeft != blockManRight && blockLeft <= blockManTop){

            blockMoveSound.play()
        }
        
    };
    //addEventListener()
    blockMoves()
    




},1);


