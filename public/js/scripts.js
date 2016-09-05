
$(document).ready(function(){
    var nav_button = $(".nav-show");
    var overlay = $(".overlay");

    var is_open=false;

    nav_button.on('click',function(){
        show_hide();
    });

    function show_hide() {
        if (is_open == false) {
            overlay.show();
            nav_button.removeClass("is-open");
            nav_button.addClass("is-closed");
            is_open =true;
        } else {
            overlay.hide();
            nav_button.removeClass("is-closed");
            nav_button.addClass("is-open");
            is_open=false;
        }
    }
    $('[data-toggle="offcanvas"]').click(function(){
        $(".wrapper").toggleClass("toggle");
    });
    $('#new_size').click(function(){
        $(".add-size").css("display","block");
        $("#new_size").css("display","none");
    });
    $(".discard").click(function () {
        $(".add-size").css("display","none");
        $("#new_size").css("display","block");
    });


    $(".Assign_workout").on('click',function(){
        var id = this.id;
        console.log(id);
    });

});