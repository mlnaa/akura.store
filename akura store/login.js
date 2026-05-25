const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e){

    e.preventDefault();

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    // ambil data dari localStorage
    const savedEmail = localStorage.getItem("email");

    const savedPassword = localStorage.getItem("password");

    // cek login
    if(
        email === savedEmail &&
        password === savedPassword
    ){

        alert("Login berhasil!");

        window.location.href = "index.html";

    }else{

        alert("Email atau password salah!");

    }

});