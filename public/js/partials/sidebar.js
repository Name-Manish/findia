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


fetch("http://localhost:5000/AuthAPI/profile", {
    method:"GET",
  credentials: "include"
})
.then(res => res.json())
.then(data => {
  if (data.logedIn==true) {
    document.getElementById("logedIn").style.display="none";
    document.getElementById("profile").style.display="block";
} else {
    document.getElementById("profile").style.display="none";
    document.getElementById("logedIn").style.display="block";
    

  }

console.log("logdata",data);
});