
//Vars of DOM
const formLogin = document.getElementById("formLogin");
const email = document.getElementById("email");
const password = document.getElementById("password")
const messsage = document.getElementById("message");
let userID;

const users = {
    0: {
        userName: "Sofia",
        userLastName: "Lopera",
        userEmail: "admin@admin.com",
        userPassword: "admin123",
        rol: "admin",
        userNumber: "3212321231",
        userCountry: "Colombia",
        userCity: "Medellín",
        userAddress: "Crra 65B #117-19",
        userPostcode: "0005552"
    },
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

//Function for register user
function registerUser(info) {
    users[info[0]] = { userName: info[1], UserLastName: info[2], userEmail: info[3], userPassword: info[4], userNumber: info[5], userCountry: info[6], userCity: info[7], userAddres: info[8], userPostcode: info[9], role: info[10] }
}

//Validate login
formLogin.addEventListener("submit", (event) => {
    event.preventDefault();
    for (let i of Object.keys(users)) {
        if (users[i].userEmail === email.value && users[i].userPassword === password.value) {
            userID = i
            location.href = "pages/profile.html";
            localStorage.setItem("userID", JSON.stringify(i))

        } else {
            message.innerHTML = "<p style='color:red'> Usuario o contraseña incorrecta </p>"
        }
    }

}
);

export {
    registerUser,
    users,
    userID
}
