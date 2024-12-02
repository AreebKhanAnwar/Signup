function submit() {
    // Retrieve input values
    var firstName = document.getElementById("First_Name").value;
    var fatherName = document.getElementById("Father_Name").value;
    var emailAddress = document.getElementById("Email_Adress").value;
    var password = document.getElementById("password").value;

    // Store values in localStorage with proper key naming
    localStorage.setItem("First_Name", firstName);
    localStorage.setItem("Father_Name", fatherName);
    localStorage.setItem("Email_Adress", emailAddress);
    localStorage.setItem("password", password);

    // Clear input fields
    clearAll();
}
function clearAll() {
    document.getElementById("First_Name").value = "";
    document.getElementById("Father_Name").value = "";
    document.getElementById("Email_Adress").value = "";
    document.getElementById("password").value = "";
}

function signin() {
    window.location.href = "sign_in.html";
}

function signinsubmit() {
    // Retrieve stored data
    var storedEmail = localStorage.getItem("Email_Adress");
    var storedPassword = localStorage.getItem("password");

    // Get user input from sign-in form
    var enteredEmail = document.getElementById("Email_sign").value;
    var enteredPassword = document.getElementById("password_sign").value;

    // Validate email and password
    if (storedEmail == enteredEmail && storedPassword == enteredPassword) {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Congratulations! You're In",
            showConfirmButton: false,
            timer: 1500
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Your Email or password is Incorrect!",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
    }

    // Clear input fields
    clearSignInForm();
}

function clearSignInForm() {
    document.getElementById("Email_sign").value = "";
    document.getElementById("password_sign").value = "";
}
