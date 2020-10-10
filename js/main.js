$(document).ready(function () {
  alert("Page is ready");
  $("img").click(() => {
  	var counter=0;
  	animator=window.setInterval(function(){
		counter++;
		number = Math.floor(Math.random() * 6) + 1;
    	$("img").attr("src", `./img/${number}.png`);
    	if(counter==10){
    		window.clearInterval(animator);
    	}
	},100);
  });
});
