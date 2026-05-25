const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function(e){
  e.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // simpan data ke localStorage
  localStorage.setItem("username", username);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  alert("Pendaftaran berhasil!");

  // pindah ke login
  window.location.href = "login.html";
});