var bookNow = document.querySelector("#submit-button")
var output = document.querySelector("#output")
var firstName = document.querySelector("#firstName")
var lastName = document.querySelector("#lastName")
var arriveDate = document.querySelector("#arriveDate")
var roomType = document.querySelector("#room_type")
console.log(roomType)
var departDate = document.querySelector("#departDate")
//var Email = ""


firstName.addEventListener("keyup", (e) => {
    const value = e.currentTarget.value;
    if (value === "") {
        bookNow.disabled = true;
        console.log("Enter your Name")
    } else {
        bookNow.disabled = false;
    }
})

document.querySelector("#submit-button").onclick = function () {
    //sendEmail()
    alert("You room has been booked")
    let yess = output.innerHTML = firstName.value + " " + "Kindly Check your mail to confirm " + roomType.value + " " + "reservation, arriving on " + arriveDate.value + " " + " to depart on " + departDate.value;
    console.log(yess)
}




document.querySelector("#Deluxe-room").onclick = function () {
    roomType.value = "Deluxe Room"
}

document.querySelector("#Standard-room").onclick = function () {
    roomType.value = "Standard Room"
}

document.querySelector("#Suite-room").onclick = function () {
    roomType.value = "Suite Room"
}


document.querySelector("#food_drinks").onclick = function () {
    location.href = "http://127.0.0.1:5501/food_menu.html#packages"
}

document.querySelector("#Event_Center").onclick = function () {
    location.href = "http://127.0.0.1:5501/event.html"
}







// var roomselected = document.querySelector('#Deluxe-room').value

// if (roomselected == "Deluxe Room" ) {
//     selected_room = document.querySelector('#room_type').value
//     selected_room = "Deluxe Room"
// }



// function sendEmail () {
//      Email.send({
//         Host : "smtp.gmail.com",
//         username : "adexifeoluwa44@gmail.com",
//         Password : "oreifetope",
//         To : "adexifeoluwa44@gmail.com",
//         From : document.querySelector("#email").value,
//         Subject : "This is the subject",
//         Body : "And this is the body"
//      }).then(
//         message => (message)
//      );
// }
