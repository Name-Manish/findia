const hamburger = document.getElementById("hamburger");
const tabs = document.getElementById("tabs");


hamburger.addEventListener("click",()=>{
  if(tabs.style.display == "flex"){
    tabs.style.display = "none";
  }else{
    tabs.style.display = "flex";
    tabs.classList.add("animatin_and_style");
  }
})