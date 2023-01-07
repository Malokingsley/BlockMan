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
    let blockLeft =
    parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    //parseint to get just int(number)
    let blockManTop =
    parseInt(window.getComputedStyle(blockMan).getPropertyValue('top'));
    //parseint to get just int(number)
    let blockManRight =
    parseInt(window.getComputedStyle(blockMan).getPropertyValue('right'));
    
    let blockManBottom = 
    parseInt(window.getComputedStyle(blockMan).getPropertyValue('bottom'));
    
    let blockManLeft = 
    parseInt(window.getComputedStyle(blockMan).getPropertyValue('left'));
    

    
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
        if (blockLeft != blockManRight && blockLeft <= blockManTop ){
            
            blockMoveSound.play()
        }
        
        
    };blockMoves()
    

    let goldBlock = document.getElementById('goldBlock');
   
    let goldBlockLeft = parseInt(window.getComputedStyle(goldBlock).getPropertyValue('left'));
    
    let goldBlockRight = 
    parseInt(window.getComputedStyle(goldBlock).getPropertyValue('right'));
    

    let goldBlockBottom = 
    parseInt(window.getComputedStyle(goldBlock).getPropertyValue('bottom'));
    
    let goldBlockTop = 
    parseInt(window.getComputedStyle(goldBlock).getPropertyValue('top'));

    if ( goldBlockBottom >= 650 && goldBlockLeft <= 227 && goldBlockRight <= 1800 && goldBlockTop >= 650 && blockManTop == 100 || blockManBottom == 120 && blockManLeft != goldBlockLeft && goldBlockRight <= 575 && blockManTop <= 575 ){
        // if the block.x is less then blockman.right??
        //console.log(goldBlockLeft, goldBlockRight,"top"+ blockManTop, "bottom" + blockManBottom);
        console.log(blockManLeft,blockManRight,blockManTop,blockManBottom);
        hitSound.play();
        
        alert ("you lose goldblock")
    }
// tring to animate in order
    function goldBlockMoves(){
        if(goldBlock.classList != "animate" &&block.classList != "animate" ){ 
            //goldBlock.style.animation = true
            
            setTimeout(function(){
                goldBlock.classList.add("animate");
                //blockMan.classList.remove("animate");
                
            }, 450);
            }
    
    }; goldBlockMoves()
    //else (block != hitSound) {
       // goldBlock.style.animation = "none";
       // goldBlock.style.display = "none";
        
        //}
        
},);

        
        
        
        