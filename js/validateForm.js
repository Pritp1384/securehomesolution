$(document).ready(function(){
    $('#btnSubmit').click(function(){
        $('#error').hide();
        var name = $('#name').val();
        var email = $('#email').val();
        var phoneno = $('#phoneno').val();
        var message = $('#message').val();
        if(name == "" && email=="" && phoneno=="" && message==""){
            $('#error').html("Please enter all details");
            $('#error').slideDown();
            return false;
        }
        if (name == "") {
            $('#error').html("Please enter name");
            $('#error').slideDown();
            return false;   
        }
        if (email == "") {
            $('#error').html("Please enter email");
            $('#error').slideDown();
            return false;
        }
        if(phoneno == ""){
            $('#error').html("Please enter phone number");
            $('#error').slideDown();
            return false;
        }
        if(message==""){
            $('#error').html("Please enter message");
            $('#error').slideDown();
            return false;
        }
    });
});
