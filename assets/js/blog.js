const back = document.querySelector(".button")
const string = localStorage.getItem("formInfo")
let formInfo = JSON.parse(string) || [];
let data1 = document.querySelector(".data1")

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark");
    //sun.append("&#9790;");
    }

    //this makes the back button work

    back.addEventListener('click', function(event){
      event.preventDefault()
    window.location.href = "index.html";
    
    })

  for (let i = 0; i < formInfo.length; i++){
    const section = document.createElement("section")
    section.classList.add();

    let html = `
    <h3>${formInfo.username}</h3>
    <p>${formInfo.title}</p>
    <p>${formInfo.content}</p>`

    section.innerHTML = html;
  data1.appendChild(section);

}

//   if (formInfo){
//     document.querySelector("#username").textContent = formInfo.username;
//     document.querySelector("#title").textContent = formInfo.title;
//     document.querySelector("#username").textContent = formInfo.content;
//   }

//   let gotInfo= [
// formInfo.username,
// formInfo.title,
// formInfo.content
// ]
 