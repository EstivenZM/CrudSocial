const users = {
    0: {
        userEmail: "admin@admin.com",
        userPassword: "admin123",
        rol:"admin"
    },
    
 /*
    Ejemplo
    1: { 
        userName: "Sofia",
        userLastName: "Lopera",
        userEmail: "sofia@gmail.com",
        userPassword: "sofia123",
        userNumber: "3212321231",
        userCountry: "Colombia",
        userCity: "Medellín",
        userAddress: "Crra 65B #117-19",
        userPostcode: "0005552",
        role:"user"
    }

    */
}


function registerUser(info) {
    users[info[0]] = {userName:info[1], UserLastName:info[2], userEmail:info[3], userPassword: info[4], userNumber: info[5], userCountry: info[6], userCity: info[7], userAddres: info[8], userPostcode: info[9], role: info[10]}
}


//Vars of DOM
const form = document.getElementById("form");
const btnRegister = document.getElementById("btnRegister");


//Validate login
form.addEventListener("submit",(event)=>{
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

export {
    registerUser,
    users
}