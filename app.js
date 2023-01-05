let blockMan = document.getElementById('blockMan');
let block = document.getElementById('block');
let hitSound = new Audio('Audio/explosion.wav')
let jumpSound = new Audio('Audio/jump.wav')
function jump(){
    if(blockMan.classList != "animate"){ 
        jumpSound.play()
        
    }
    blockMan.classList.add("animate");
    setTimeout(function(){
        blockMan.classList.remove("animate");
        
    }, 500);
}

// Hit detect
function hit(){}
let checkDead = setInterval(function() {
    let blockManTop =
    parseInt(window.getComputedStyle(blockMan).getPropertyValue('top'));
    //parseint to get just int(number)
    let blockleft =
    parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    //parseint to get just int(number)
    let blockManRight =
    parseInt(window.getComputedStyle(blockMan).getPropertyValue('right'));
    
    
    if(blockleft < blockManTop && blockleft == 205 && blockManTop == 575 && blockManRight >= 200 && blockleft != 200){
        // if the block.x is less then blockman.right??
        block.style.animation = "none";
        block.style.display = "none";
         console.log("Top" + blockManTop,"Right" + blockManRight,"block Left" + blockleft);
        
        hitSound.play()
        alert ( "you lose")
        
    } else if (blockleft <= 50 && blockManTop >= 40){
    
      // console.log(blockManTop, blockleft)
       alert('you win')

       


        {

            
           
    

}





}},1);


