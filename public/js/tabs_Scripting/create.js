const main = document.getElementById("main");
const plus_icon = document.getElementById("plus-icon");
const create_file_section = document.getElementById("create_file_section");
const cutIcon = document.getElementById("cut_icon");

plus_icon.addEventListener("click",()=>{
    main.style.display= "none";
    create_file_section.style.display = "flex";
})

cutIcon.addEventListener("click",()=>{
    main.style.display= "grid";
    create_file_section.style.display = "none";
    
})



const input0 = document.getElementById("input0");
const create = document.getElementById("create");

create.addEventListener("click",()=>{
    main.style.display= "grid";
    create_file_section.style.display = "none";
    console.log(input0.value);
    const newDiv = document.createElement("div");
    newDiv.classList.add("plus-icon");
    newDiv.classList.add("plus-icon-size");
    newDiv.style.fontSize = "1rem";
    newDiv.style.overflow = "hidden";
    newDiv.innerHTML = input0.value;
    main.appendChild(newDiv);
})