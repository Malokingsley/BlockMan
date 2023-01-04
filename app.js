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
    if(blockleft < blockManTop && blockleft == 196 && blockManTop == 575){
        block.style.animation = "none";
        block.style.display = "none";
        console.log(blockManTop, blockleft);

        alert("you lose")

    } else if (blockleft > blockMan && blockleft == 100 && blockManTop <= 575){
       console.log(blockManTop, blockleft)

        const when = setTimeout(function() {
            alert("win")
            
        
            
        }, 1000); clearTimeout(when)
        
    }

},10);