function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("message");

    // Predefined username and password
    var correctUsername = "ITVARSITY";
    var correctPassword = "1234567";

    // Check if the username and password match
    if (username === correctUsername && password === correctPassword) {
        message.style.color = "green";
        message.textContent = "Correct login, you are being logged in.";
        return false; // Prevent form submission
    } else {
        message.style.color = "red";
        message.textContent = "Username or password is incorrect.";
        return false; // Prevent form submission
    }
}
