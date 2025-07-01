//Vars of DOM
const formLogin = document.getElementById("formLogin");
const email = document.getElementById("email");
const password = document.getElementById("password")
const messsage = document.getElementById("message")

const users = {
    0: {
        userEmail: "admin@admin.com",
        userPassword: "admin123",
        rol: "admin"
    },

    /*Ejemplo
       1: { 
           userName: "asdf",
           userLastName: "asdf",
           userEmail: "asdf@adsf.com",
           userPassword: "asdf123",
           userNumber: "3212321231",
           userCountry: "asdf",
           userCity: "asdf",
           userAddress: "asdf",
           userPostcode: "asdf",
           role:"asdf"
       }*/
}

//Function for register user
function registerUser(info) {
    users[info[0]] = { userName: info[1], UserLastName: info[2], userEmail: info[3], userPassword: info[4], userNumber: info[5], userCountry: info[6], userCity: info[7], userAddres: info[8], userPostcode: info[9], role: info[10] }
}

//Validate login
formLogin.addEventListener("submit", (event) => {
    event.preventDefault();
    
    for (let i of Object.keys(users)) {
        if (users[i].userEmail === email.value) {
            if (users[i].userPassword === password.value) {
                window.location.href = 'pages/images.html'
            } else {
                message.innerHTML = "<p style='color:red;'> Contraseña incorrecta </p>"
            }

        } else {
            message.innerHTML = "<p style='color:red'> Usuario o contraseña incorrecta </p>"
        }
    }
    
}
);

export {
    registerUser,
    users
}
