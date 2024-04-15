const back = document.querySelector(".button")
const gotInfo = localStorage.getItem("formInfo")
let formInfo = JSON.parse(gotInfo) || [];
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
    section.classList.add("sectionInfo");

    let html = `<section class= "content">
    <h3 class= "blogTitle">${formInfo[i].title}</h3>
    <p class= "blog">${formInfo[i].content}</p>
    <p class= "blog"> posted by: ${formInfo[i].username}</p>
    </section>`


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
 