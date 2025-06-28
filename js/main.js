let form = document.getElementById("form");
let buttonRegister = document.getElementById("buttonRegister-container")

form.addEventListener("submit", (event)=>{

    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email == "" || password == "") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Campos vacíos...",
        });
    } else {
        console.log("Hecho.");
    }; 
});

function openRegisterPage() {

    setTimeout(() => {
        window.location.href = "../pages/register.html"
    }, 1000); // 1000 milisegundos = 1 segundo
}