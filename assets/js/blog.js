const back = document.querySelector(".button")
const meow = localStorage.getItem("identity");
console.log(meow)

function toggle() {
  var element = document.body;
  element.classList.toggle("dark");
  //sun.append("&#9790;");
  }


  back.addEventListener('click', function(event){
    event.preventDefault()
  window.location.href = "index.html";
   // doesnt work yet
  })