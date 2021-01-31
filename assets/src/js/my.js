/* $(document).ready(function(){
    $("#sidebar-btn").click(function(event){
        $("#sidebar-mask").css("display", "block");
        event.stopImmediatePropagation();
        return false;
    });
}); */
$(document).ready(function(){
    $("#sidebar-btn").click(function(event){
        $("#sidebar-mask").addClass("active");
        /* $("#sidebar-btn").addClass("noActive"); */
        $("#sidebar-btn-close").css("display", "block");
    });
    
});
