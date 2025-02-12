$(document).ready(function(){
    $("#signinform").validate({
        rules:{
            user_name: {
                required: true,
                minlength: 3
            },
            password: {
                required: true,
                minlength: 6,
                maxlength: 6,
            }
        },
        messages: {
            user_name:{
                required: "Name is mandatory",
                minlength: "3 characters must"
               },
               password: {
                required: "Password is mandatory",
                minlength: "6 characters must",
                
               }
        }
    });

    $("#signupform").validate({
        rules: {
            email: {
                email: true,
                required: true
            },
            password: {
                required: true,
                minlength: 6,
                maxlength: 6,
            },
            confirmpass: {
              equalTo: "#password"
            },
            uname: {
                required: true,
                minlength: 3
            }

        }
    })
})