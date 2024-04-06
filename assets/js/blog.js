//const back = document.querySelector(".button")
const meow = localStorage.getItem("identity");
console.log(meow)

function toggle() {
  var element = document.body;
  element.classList.toggle("dark");
  //sun.append("&#9790;");
  }


document.getElementById("backButton").addEventListener("click", function() {
window.history.go(-1);
});