const register = document.getElementById("register");
const login = document.getElementById("login");
const Paging_Data = document.getElementById("Paging_Data");
const hide = document.getElementById("hide");


hide.style.display="none";



register.addEventListener("click",(e)=>{
    //input
    const name = document.getElementById("input0").value;
    const email = document.getElementById("input1").value;
    const password = document.getElementById("input2").value;

    hide.style.display="flex";
    if(Paging_Data.innerText == "Register Now"){
        fetch("https://findia-server.onrender.com/AuthAPI/register",{
            method: "POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify({name,email,password})
        }).then(function(res){
            return res.json();
        }).then(function(data){
            alert(data);
        }).catch(function(err){
            console.log(err);
        })
        // location.reload();
    }else{
        Paging_Data.innerText="Register Now";
        
    }
})
login.addEventListener("click",(e)=>{
    Paging_Data.innerText="Login Now";
    hide.style.display="none";
})






//login
login.addEventListener("click",(e)=>{
    const email = document.getElementById("input1").value;
    const password = document.getElementById("input2").value;

    fetch("https://findia-server.onrender.com/AuthAPI/login",{
            method: "POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify({email,password}),
            credentials : "include"

        }).then(function(res){
            console.log(res);
            return res.json();
        }).then(function(data){
            console.log(data);
            if (res.ok) {
             localStorage.setItem("token", data.token);
             window.location.href = "/dashboard";
             } else {
              alert(data.message);
              }
        }).catch(function(err){
            console.log(err);
        })
})




