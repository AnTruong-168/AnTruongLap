$(document).on("click","#signupbtn",Register)

function Register()
{
    var message = "Successfully created new Account";
    
    message += "\nUsername: " +$("#username").val();
    message += "\nEmail: " + $("#email").val();
    message += "\nPassword: " + $("#password").val()

    alert(message);
}