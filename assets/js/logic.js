const sun = document.querySelector(".sun");
const string = localStorage.getItem("formInfo");
let blog = JSON.parse(string) || [];

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark")
  //sun.append("&#9790;");
  ;}
//this makes the light dark toggle work


let submit = document.querySelector("#submitButton");


// let identity = JSON.stringify(localStorage.getItem("formInfo.value"))


submit.addEventListener('click', function(event){
  event.preventDefault()
  let  something = {
    username : document.querySelector("input[id= 'username']").value,
    title : document.querySelector("input[id= 'title']").value,
    content : document.querySelector("input[id= 'content']").value
    };
    blog.push(something);
localStorage.setItem('formInfo', JSON.stringify(blog));
window.location.href = "blog.html";
 // doesnt work yet
})


