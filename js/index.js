$( document ).ready(function() {
    $(".readmore").click(readmore);
    $(".readless").click(readless);
    $(".learnmore").click(learnmore);

    function readmore(event){
        event.preventDefault();
        $(this).hide();
        $("#show-this-on-click").slideDown();
        $(".readless").show();
    }

    function readless(event){
        event.preventDefault();
        $(this).hide();
        $("#show-this-on-click").slideUp();
        $(".readmore").show();
    }

    function learnmore(event){
        event.preventDefault();
        $(this).hide();
        $("#learnmoretext").slideDown();  
    } 

});