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