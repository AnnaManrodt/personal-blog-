//reading and writing from local storage anything that both pages neeeds 
// something for the graphics?
//const username = document.querySelector("#Username");
//let username;
//let title;
//let container;
// let mode = "dark";
// const container = document.querySelector('.container');

const sun = document.querySelector(".sun");

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark")
  //sun.append("&#9790;");
  ;}

let formInfo = {
username : document.querySelector("#username"),
title : document.querySelector("#title"),
content : document.querySelector("#content"),
}
//console.log(formInfo)

let username = document.querySelector("#username");
let title = document.querySelector("#title");
let content = document.querySelector("#content");

console.log(username)

//formInfo.push({username, title, content})

const submit = document.querySelector("#submitButton");



let identity = JSON.stringify(localStorage.getItem("formInfo.value"))

console.log(identity)

submit.addEventListener('click', function(event){
  event.preventDefault()
localStorage.setItem('formInfo', identity);
window.location.href = "blog.html";
 // doesnt work yet
})


