let email=document.getElementById("email");
let password=document.getElementById("password");
let form=document.querySelector("form");

function validateInput()
{
    if(email.value.trim()==="")
    {
        onError(email,"Email cannot be empty");
    }
    else
    {
        if(!isValidEmail(email.value.trim()))
        {
            onError(email,"Email is not valid");
        }
        else
        {
            onSuccess(email);
        }
    }

    //password
    if(password.value.trim()==="")
    {
        onError(password,"Password cannot be empty");
    }
    else
    {
        if(!isValidPass(password.value.trim()))
        {
            onError(password,"Your password must be at least 8 characters");
        }
        else
        {
            onSuccess(password);
        }
    }

    if(email.value && password.value)
    {
        if(email.value=="bhakti@gmail.com" && password.value=="bhakti123")
        {   
            swal({
                title:"Success!", 
                text:"Login Successfully", 
                icon:"success"
                }).then(
                    function()
                    {
                        window.location.href="./index.html";
                    });
            return false;
        }
        else
        {
            swal("Oops.....", "You have entered an invalid email or password", "error");
            return false;
        }
    }
}
document.querySelector("button")
.addEventListener("click",(event)=>{
    event.preventDefault();

    validateInput();
    });
function onSuccess(input)
{
    let parent=input.parentElement;
    let messageEle=parent.querySelector("p");
    messageEle.style.display="none"; 
    input.classList.remove("error");
    input.classList.add("success");  
}
function onError(input,message)
{
    let parent=input.parentElement;
    let messageEle=parent.querySelector("p");
    messageEle.style.display="block";
    messageEle.innerText=message;  
    input.classList.add("error");
    input.classList.remove("success");

}

function isValidEmail(emailVal)
{
   return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailVal);
}

function isValidPass(pass)
{
    return /.{8,}/.test(pass);
}

$("i#icon").click(function(){
    var inputType=$("#password").attr('type');
    if(inputType ==="password")
    {
        $("#password").attr('type','text');
        $('i#icon').removeClass('fa fa-eye');
        $('i#icon').addClass("fa fa-eye-slash");
        $("#password").addClass('password_input pb-1');
    }
    else
    {
        $("#password").attr('type','password');
        $('i#icon').removeClass('fa fa-eye-slash');
        $('i#icon').addClass("fa fa-eye");
        $('#password').addClass("password_input pb-1");
    }
});
