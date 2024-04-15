// const form = document.querySelector("form");

// if(form.checkValidity() === false){
//   console.log("fomr is invalid");
// }
// else{};
//

submit.addEventListener('click', function(event){
  if (form.checkValidity() === false){
    console.log("form invalid");
    form.querySelectorAll("input").forEach(i=>{
      i.classList.add("invalid");
    });
  }
  else {
  event.preventDefault()
  let  something = {
    username : document.querySelector("input[id= 'username']").value,
    title : document.querySelector("input[id= 'title']").value,
    content : document.querySelector("input[id= 'blogContent']").value
    };
    blog.push(something);
localStorage.setItem('formInfo', JSON.stringify(blog));
window.location.href = "blog.html"; }
// doesnt work yet
}) 