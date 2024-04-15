const sun = document.querySelector(".lightDarkMode");
const string = localStorage.getItem("formInfo");
let blog = JSON.parse(string) || [];
const form = document.querySelector("form");

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark")
  //sun.append("&#9790;");
  ;}
//this makes the light dark toggle work


let submit = document.querySelector("#submitButton");


// let identity = JSON.stringify(localStorage.getItem("formInfo.value"))






// function submitForm (action) {
//   var form = document.getElementById('form')
//   form.action = action
//   if (form.checkValidity()) {
//     form.submit()
//   } else {
//     alert('There is still an empty field')
//   }
// }

