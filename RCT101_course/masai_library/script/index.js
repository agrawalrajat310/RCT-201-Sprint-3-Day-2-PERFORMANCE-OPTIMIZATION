document.getElementById("admin_btn").addEventListener("click", () => {
  AuthAdmin();
});

let token = localStorage.getItem("token");

function AuthAdmin() {
  if (token == "" || !token) {
    window.location.href = "login.html";
    return;
  }

  window.location.href = "admin.html";
}
