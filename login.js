const signUpButton = document.querySelector("#signUp");
console.log(signUpButton)
const signInButton = document.querySelector("#signIn");
console.log(signInButton)
const container = document.querySelector("#container");
console.log(container)

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active')
})


signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active')
})



function createAccount () {
    var email = document.querySelector("#email");
    console.log(email)
    var password = document.querySelector("#password").value;
    console.log(password)

    if (email !== "" && password !== ""){
            alert("Account Successfully Created")
            // window.location.assign("homepage.html");
        }

}


function loginAccount () {
    var email = document.querySelector("#email2").value;
    console.log(email)
    var password = document.querySelector("#password2").value;
    console.log(password)

    if (email === "adexifeoluwa44@gmail.com" && password === "admin123"){
            alert("Successfully Logged In")
            window.location.assign("homepage.html");
        } 
        else {
            alert("Register your email to Log In")
        }

}



// Show Password Section

let eyeicon = document.querySelector("#eye-icon");
console.log(eyeicon)
let password2 = document.querySelector("#password2");
console.log(password2)


function showPassword() {
    if (password2.type == "password") {
        password2.type = "text";
        eyeicon.src = "./image/bg/eye-off.svg";
    } else {
        password2.type = "password";
        eyeicon.src = "./image/bg/eye.svg";

    }
}



var emailfield = document.querySelector("#email2")
console.log(emailfield)
var emailerror = document.querySelector("#email-error")
console.log(emailerror)



function validateEmail () {
    if (emailfield.value !== "Adex@ife") {
        emailerror.style = "TEST"
    }
}


