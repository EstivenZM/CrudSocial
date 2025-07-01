import { users, userID } from "./main.js";

let profileUserName = document.getElementById("profileUserName");
let profileUserLastname = document.getElementById("profileUserLastname");
let profileUserEmail = document.getElementById("profileUserEmail");
let profileUserPassword = document.getElementById("profileUserPassword");
let profileUserNumber = document.getElementById("profileUserNumber");
let profileUserCountry = document.getElementById("profileUserCountry");
let profileUserCity = document.getElementById("profileUserCity");
let profileUserAddress = document.getElementById("profileUserAddress");
let profileUserPostcode = document.getElementById("profileUserPostcode");
let form = document.getElementById("form");
let buttonForm = document.getElementById("buttonForm")
const currentUserID = localStorage.getItem("userID");

/*
const users = {
    1: {
        userName: "Sofia",
        userLastName: "Lopera",
        userEmail: "sofia@gmail.com",
        userPassword: "sofia123",
        userNumber: "3212321231",
        userCountry: "Colombia",
        userCity: "Medellín",
        userAddress: "Crra 65B #117-19",
        userPostcode: "0005552"
    }
}
*/
console.log(currentUserID);




//Aqui se recorre el objeto "users" para colocar la informacion 
function profileInformation(users) {
    //Traemos los datos del usuario

    const currentUser = users[1];
    profileUserName.value = currentUser.userName
    profileUserLastname.value = currentUser.userLastName
    profileUserEmail.value = currentUser.userEmail
    profileUserPassword.value = currentUser.userPassword
    profileUserNumber.value = currentUser.userNumber
    profileUserCountry.value = currentUser.userCountry
    profileUserCity.value = currentUser.userCity
    profileUserAddress.value = currentUser.userAddress
    profileUserPostcode.value = currentUser.userPostcode
    

    //Bloqueamos los inputs para que no pueda cambiar la info a menos de que le de en "Editar informacion"
    const allInputs = document.querySelectorAll('input')
    allInputs.forEach(input => {
        input.disabled = true;
        input.style.border = "none";
    })

}
profileInformation(users)

form.addEventListener("submit", (event) => {
    //Ayuda a que el formulario no se reinicie con el submit
    event.preventDefault();

    //Cambiamos el contenido del boton a "guardar"
    buttonForm.innerHTML = "Guardar"

    //Seleccionamos todos los inputs del formulario
    const allInputs = document.querySelectorAll('input')
    //Recorre todos los inputs para activar los inputs y aplicar estilo cuando se cambie un dato
    allInputs.forEach(input => {
        input.disabled = false;
        //cuando el usuario cambie informacion y pase a otro input entonces se aplica un estilo
        input.addEventListener("change", () => {
            input.style.border = "2px solid green";
        })

        //Cuando le da en "Guardar" envia los datos nuevos
        form.addEventListener("submit", () => {
            users[1] = {
                userName: profileUserName.value,
                userLastName: profileUserLastname.value,
                userEmail: profileUserEmail.value,
                userPassword: profileUserPassword.value,
                userNumber: profileUserNumber.value,
                userCountry: profileUserCountry.value,
                userCity: profileUserCity.value,
                userAddress: profileUserAddress.value,
                userPostcode: profileUserPostcode.value
            }
            //Muestra los datos del usuario
            profileInformation(users)
        })

    })
})


