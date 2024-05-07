const pwd = document.querySelector(".pwd");
const cpwd = document.querySelector(".cpwd");
const btn = document.querySelector(".submit-btn");
const alert = document.querySelector(".pwd-alert");

function checkPwd () {
    if (pwd.value !== cpwd.value) {
        alert.innerHTML = "Passwords do not match!"
        pwd.setCustomValidity("Invalid field.");
        cpwd.setCustomValidity("Invalid field.");
    }

    if (pwd.value === "") {
        alert.innerHTML = "Please type in password."
        pwd.setCustomValidity("Invalid field.");
        cpwd.setCustomValidity("Invalid field.");
    }

    if ((pwd.value === cpwd.value) && (pwd.value !== "")) {
        alert.innerHTML = "";
        pwd.setCustomValidity("");
        cpwd.setCustomValidity("");
    }
}

btn.addEventListener("click", checkPwd);
pwd.addEventListener("keyup", checkPwd);
cpwd.addEventListener("keyup", checkPwd);
