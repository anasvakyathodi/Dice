function play(){
    var au=document.getElementById("sound_play");
    au.play();
}

function control_roll_show(){
    var bool=false;
    document.querySelector("#roll").disabled = true;
    setTimeout(function(){
        /* mentioned delay time as 6000 milli seconds
        because the total time taken for the dice to start and 
        finish roll is 6 seconds */
        document.querySelector("#roll").disabled = false;
    },6000); 

}