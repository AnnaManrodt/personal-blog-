//reading and writing from local storage anything that both pages neeeds 
// something for the graphics?
//const username = document.querySelector("#Username");
let username = document.querySelector("#Username");
const title = "";
const content ="this is a test ";
const submit = document.querySelector("#submitButton");

let identity = localStorage.getItem('username')

submit.addEventListener('click', function(event){
  event.preventDefault()
JSON.stringify (localStorage.setItem('identity', username))
})


//localStorage.setItem(username, "");


//localStorage.getItem(username);

//let test1= localStorage.getItem(username)


//console.log(test);

