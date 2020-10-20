$(document).ready(function() {

    $("#change").click(function() {
        /*  Added more good looking dark theme */
        $("body").toggleClass("dark-mode-1");
        $("button").toggleClass("dark-mode-2");
        $("img").toggleClass("dark-mode-3");
    });
});