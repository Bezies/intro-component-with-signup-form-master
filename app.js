let hidden = document.querySelectorAll(".message");
for (let i = 0; i < hidden.length; i++) {
    hidden[i].style.display = "none"
}



function validate(mail) {
    let regx = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-?\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    console.log(regx.test(mail))
    if (regx.test(mail)) {
        return true
    } else {
        return false
    }
}


let form = document.querySelector(".claim");
let errors = document.querySelectorAll(".message")
let icons = document.querySelectorAll(".icon");
let placeholder = document.querySelectorAll("input");
let inputs = document.querySelectorAll("input");
let mail = document.querySelector(".mail");
let spanIcon = document.querySelectorAll(".span-icon");
form.addEventListener('click', function () {


    for (let i = 0; i < inputs.length; i++) {

         if (inputs[i].value.length <= 0) {
            errors[i].style.display = "block";
            icons[i].style.display = "block";
            placeholder[i].removeAttribute("placeholder");
        }
        else {
            if(inputs[i].type === 'email'){
                if (validate(mail.value) === false) {
                    errors[2].style.display = "block";
                    icons[2].style.display = "block";
                    placeholder[2].removeAttribute("placeholder");
                }
                else{
                    errors[i].style.display = "none";
                    icons[i].style.display = "none";
                    
                }
            }
            else {
                errors[i].style.display = "none";
                spanIcon[i].style.display = "none";
            }

        }
    }


})
