const otpContainer = document.getElementById("otp-container");

const emailDisplay = document.createElement("p");
emailDisplay.id = "email-display";
emailDisplay.textContent = "OTP sent to: " + (sessionStorage.getItem("userEmail") || "your email");

const otpInput = document.createElement("input");
otpInput.type = "text";
otpInput.id = "otp";
otpInput.placeholder = "Enter 6-digit OTP";
otpInput.maxLength = 6;
otpInput.oninput = function (event) {
    event.target.value = event.target.value.replace(/\D/g, ""); // Allow only numbers
};

const errorMsg = document.createElement("p");
errorMsg.className = "error";
errorMsg.id = "error-msg";

const submitButton = document.createElement("button");
submitButton.textContent = "Submit";
submitButton.onclick = function () {
    const otp = otpInput.value;
    if (!/^\d{6}$/.test(otp)) {
        errorMsg.textContent = "Please enter a valid 6-digit OTP.";
        return;
    }
    alert("OTP Verified! Proceed to reset password.");
    errorMsg.textContent = "";
};

otpContainer.appendChild(emailDisplay);
otpContainer.appendChild(otpInput);
otpContainer.appendChild(errorMsg);
otpContainer.appendChild(submitButton);