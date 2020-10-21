$(document).ready(function() {
    alert("Page is ready");
    $("#roll").click(() => {
        number = Math.floor(Math.random() * 6) + 1;
        $("#img-container").delay(500).fadeIn();
        $("#img-container").attr("src", `./img/${number}.png`);
        var min = 1;
        var max = 20;
        var xr = getRandom(max, min);
        var yr = getRandom(max, min);
        $('#img-container').css('webkitTransform', 'rotateX(' + xr + 'deg) rotateY(' + yr + 'deg)');
        $('#img-container').css('transform', 'rotateX(' + xr + 'deg) rotateY(' + yr + 'deg)');
        
        control_roll_show();
    });

    function getRandom(max, min) {
        var x=Math.random();
        var y=Math.floor(x * (max - min));
        return (y + min)*90;
    }
});
