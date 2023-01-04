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
    var blockManTop =
    //parseint to get just int(number)
    parseInt(window.getComputedStyle(blockMan).getPropertyValue('top'));
    var blockleft =
    //parseint to get just int(number)
    parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    if(blockleft <20 && blockleft >0 && blockManTop >= 574){
        block.style.animation = "none";
        block.style.display = "none";

        alert("you lose")

    }

}, 10);