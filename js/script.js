const inputTitle = document.querySelector("#inputTitle");
const inputDescription = document.querySelector("#inputDescription");
const btn = document.querySelector("#btn");
const content = document.querySelector("#content");

const data = [];

btn.addEventListener("click", () => {
  content.innerHTML = "";
  data.push({ title: inputTitle.value, description: inputDescription.value });

  data.forEach((item, i, array) => {
    content.innerHTML += `<div class="item">
        <h2> Title: ${array[i].title} </h2>
        <h2>Description: ${array[i].description}</h2>
        <button class = "editBtn">Edit</button>   
        <button class = "deleteBtn">Delete</button></div> `;
  });
  inputTitle.value = "";
  inputDescription.value = "";
});
