function submit() {
    
    var First_Name = document.getElementById("First_Name").value;
    var Father_Name = document.getElementById("Father_Name").value;
    var Email_Adress = document.getElementById("Email_Adress").value;
    var password = document.getElementById("password").value;
    
    
    localStorage.setItem("First_Name",First_Name)
    localStorage.setItem("Father_Name",Father_Name)
    localStorage.setItem("Email_Adress",Email_Adress)
    localStorage.setItem("password",password)


   clearAll()

}
function clearAll() {
    document.getElementById("password").value = "";
    document.getElementById("First_Name").value = "";
    document.getElementById("Father_Name").value = "";
    document.getElementById("Email_Adress").value = "";
}

function signin(){
    window.location.href = "sign_in.html"
}

function signinsubmit(){
    var password_sign = localStorage.getItem("password_sign")
    var email = localStorage.getItem("Email_Adress")
    var password_sign = document.getElementById("password_sign").value
    var Email_sign = document.getElementById("Email_sign").value

    if (password_sign == password_sign & email == Email_sign) {
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
          });    }

    clear()
}

function clear() {
    var password_sign = document.getElementById("password_sign").value = ""
    var Email_sign = document.getElementById("Email_sign").value = ""
}