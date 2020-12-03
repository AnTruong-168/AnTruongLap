$(document).on("click","#signupbtn",Register)

function Register(e)
{
    e.preventDefault();
    if ($("#cpassword").val() === $("password").val())
    {
        var message = "Successfully created new Account";
    
        message += "\nUsername: " +$("#username").val();
        message += "\nEmail: " + $("#email").val();
        message += "\nPassword: " + $("#password").val()

        alert(message);
    }
    else
    {
        alert("Hay kiem tra lai");
    }
    
}