const register = document.getElementById("register");
const login = document.getElementById("login");
const Paging_Data = document.getElementById("Paging_Data");
const hide = document.getElementById("hide");


hide.style.display="none";



register.addEventListener("click",(e)=>{
    //input
    const Name = document.getElementById("input0").value;
    const email = document.getElementById("input1").value;
    const password = document.getElementById("input2").value;

    hide.style.display="flex";
    if(Paging_Data.innerText == "Register Now"){
        fetch("http://localhost:5000/register",{
            method: "POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify({Name,email,password})
        }).then(function(res){
            return res.json();
        }).then(function(data){
            console.log(data);
        }).catch(function(err){
            console.log(err);
        })
        alert("register complited");
        location.reload();
    }else{
        Paging_Data.innerText="Register Now";
        
    }
})
login.addEventListener("click",(e)=>{
    Paging_Data.innerText="Login Now";
    hide.style.display="none";
})