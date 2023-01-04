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
    console.log(`here is block left ${blockleft}`)
    if(blockleft < blockManTop && blockleft == 205 && blockManTop == 575){
        // if  the blockright.x is less then blockman.left??
        block.style.animation = "none";
        block.style.display = "none";
        console.log(blockManTop, blockleft);

        alert("you lose")

    } else if (blockleft < 50 ){
       console.log(blockManTop, blockleft)
       alert('you win')

        // const when = setTimeout(function()// 
        {
           
            
        
            
       // }, 1000); clearTimeout(when)
        
  //  }

}}},10);