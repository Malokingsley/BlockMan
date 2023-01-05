let blockMan = document.getElementById('blockMan');
let block = document.getElementById('block');


function jump(){
    if(blockMan.classList != "animate"){ 

    }
    blockMan.classList.add("animate");
    setTimeout(function(){
        blockMan.classList.remove("animate");
        
    }, 500);
}

// Hit detect
let checkDead = setInterval(function() {
    let blockManTop =
    //parseint to get just int(number)
    parseInt(window.getComputedStyle(blockMan).getPropertyValue('top'));
    let blockleft =
    //parseint to get just int(number)
    parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    if(blockleft < blockManTop && blockleft == 205 ){
        // if the block.x is less then blockman.right??
        block.style.animation = "none";
        block.style.display = "none";
        console.log(blockManTop, blockleft);

        alert("you lose")

    } else if (blockleft < 50 && blockManTop >= 40){
    
       console.log(blockManTop, blockleft)
       alert('you win')


        {
           
    

}}},1);


