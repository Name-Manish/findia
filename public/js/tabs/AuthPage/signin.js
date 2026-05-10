// login.js

const btn = document.getElementById("btn");

btn.addEventListener("click", async function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("http://localhost:5000/AuthAPI/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include", // cookies/session include karega
      body: JSON.stringify({
        email,
        password
      })
    });

    const data = await response.json();

    console.log("Login Success:", data);

  } catch (error) {
    console.error("Error:", error);
  }
});