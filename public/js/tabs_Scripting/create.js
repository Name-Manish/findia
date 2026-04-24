

const main = document.getElementById("main");
const plus_icon = document.getElementById("plus-icon");
const create_file_section = document.getElementById("create_file_section");
const cutIcon = document.getElementById("cut_icon");

plus_icon.addEventListener("click", () => {
  main.style.display = "none";
  create_file_section.style.display = "flex";
});

cutIcon.addEventListener("click", () => {
  main.style.display = "grid";
  create_file_section.style.display = "none";
});

const input0 = document.getElementById("input0");
const create = document.getElementById("create");

create.addEventListener("click", () => {
  main.style.display = "grid";
  create_file_section.style.display = "none";
  console.log(input0.value);
  
  const title = input0.value;
  
  const url = "https://findia-server.onrender.com/flashcard/createFolder";
  
  fetch(url, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
        },
    credentials: "include",
    body: JSON.stringify({ title }),
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      alert(data.message);
      console.log(data);
    });
});



fetch("https://findia-server.onrender.com/flashcard/getFolder", {
  method: "get",
  credentials: "include",
})
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    // alert(data[0]);
    console.log(data);
   
    for(let i = 0; i<data.length;i++){
      const newDiv = document.createElement("div");
      newDiv.classList.add("plus-icon");
      newDiv.classList.add("plus-icon-size");
      newDiv.style.fontSize = "1rem";
      newDiv.style.overflow = "hidden";

          newDiv.innerHTML = data[i].title;
          main.appendChild(newDiv);
    }


  });
