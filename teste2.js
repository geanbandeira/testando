const loginForm = document.getElementById("login-form");
const userSection = document.getElementById("user-section");
const userDisplay = document.getElementById("user-display");
const logoutButton = document.getElementById("logout-button");
const errorMessage = document.getElementById("error-message");

loginForm.addEventListener("submit", e => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulação de autenticação (usuário e senha fixos)
    if (username === "usuario" && password === "senha") {
        displayUserSection(username);
    } else {
        displayErrorMessage("Credenciais inválidas.");
    }
});

logoutButton.addEventListener("click", () => {
    displayLoginForm();
});

function displayUserSection(username) {
    errorMessage.textContent = "";
    loginForm.style.display = "none";
    userSection.style.display = "block";
    userDisplay.textContent = username;
}

function displayLoginForm() {
    userSection.style.display = "none";
    loginForm.style.display = "block";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}

function displayErrorMessage(message) {
    errorMessage.textContent = message;
}

displayLoginForm();
