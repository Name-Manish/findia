const togleBar = document.getElementById("togleBar");
const sidebar = document.getElementById("sidebar");
const body = document.querySelector("body");

sidebar.style.display="none";



togleBar.addEventListener("click",()=>{
    if(sidebar.style.display == "none"){
        sidebar.style.display = "flex";
    }else{
        sidebar.style.display = "none";
    }
})