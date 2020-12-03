$(document).on("click","#signupbtn",Checker)

function Checker()
{
    var password = $("#cpassword").val();
    var cpassword = $("#password").val();

    if (password == cpassword && password != null)
    {
        Register();
    }
    else
    {
        alert("Hay kiem tra lai");
    }
}
function Register()
{
    var message = "Successfully created new Account";
    
    message += "\nUsername: " +$("#username").val();
    message += "\nEmail: " + $("#email").val();
    message += "\nPassword: " + $("#password").val()

    alert(message);
}