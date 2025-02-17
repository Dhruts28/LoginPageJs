function sendOTP() {
    const email = document.getElementById("email").value;
    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }
    sessionStorage.setItem("userEmail", email);
    window.location.href = "otp.html";
}