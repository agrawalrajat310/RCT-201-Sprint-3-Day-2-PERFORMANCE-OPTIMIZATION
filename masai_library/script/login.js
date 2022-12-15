document.getElementById("auth").addEventListener("click", (e) => {
  AuthAdmin(e);
});

async function AuthAdmin(e) {
  e.preventDefault();

  try {
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;
    console.log(email, password);

    let payload = {
      email,
      password,
    };

    let res = await fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await res.json();

    localStorage.setItem("token", data.token);
    window.location.href = "admin.html";
  } catch (error) {
    console.log(error);
  }
}
