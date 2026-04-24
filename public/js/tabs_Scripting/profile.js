fetch("https://findia-server.onrender.com/AuthAPI/profile", {
  credentials: "include"
})
.then(res => res.json())
.then(data => {
  if (data.token) {
    console.log("User logged in", data);
    document.getElementById("welcome").innerText=`Welcome ${data.email}`;
  } else {
    window.location.href = "/login";
  }
});

document.getElementById("logout").addEventListener("click",()=>{
    fetch("https://findia-server.onrender.com/AuthAPI/logout", {
      method: "POST",
      credentials: "include"
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      window.location.href = "/login";
    });
})
