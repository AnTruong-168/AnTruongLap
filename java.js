$(document).on("click","#signupbtn",Register)

function Register(e)
{
    e.preventDefault();
    if ($("#cpassword").val() === $("#password").val())
    {
        
        $.ajax({
            type: "POST",
            url: "register.php",
            data: {
                username : $("#username").val(),
                password : $("#password").val(),
                email : $("#email").val(),
                phone : $("#pnumber").val(),
                birthday : $("#bday").val(),
            },
            success: function( result ) {
                result = $.parseJSON(result);
                
                if(result.success) {
                    alert("Registered successfully!");
                    location.href="login.html";
                }
                else {
                    alert("Registered unsuccessfully!");
                }
            }
        });
    }    
    else {
        $("#error").text("* Password mismatched.\n");
    }
    
}