

document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // function showAlert() {
    //     document.getElementById("alert-box").classList.remove("hidden");
    // }

    // function closeAlert() {
    //     document.getElementById("alert-box").classList.add("hidden");
    // }

    // Check username and password (You can replace this with your authentication logic)
    if (username == 'keenan' && password == '12345') {
        window.location.href = "home.html";
    } else {
        alert('Invalid Username/Password')
    }
});