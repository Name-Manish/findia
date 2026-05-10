const btn = document.getElementById("btn");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Register API call
  fetch("http://localhost:5000/AuthAPI/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password
    })
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Register Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});