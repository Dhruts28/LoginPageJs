        const validUsername = "admin";
        const validPassword = "password123";

        const loginContainer = document.getElementById("login-container");

        const usernameInput = document.createElement("input");
        usernameInput.type = "text";
        usernameInput.id = "username";
        usernameInput.placeholder = "Username";

        const passwordInput = document.createElement("input");
        passwordInput.type = "password";
        passwordInput.id = "password";
        passwordInput.placeholder = "Password";

        const togglePassword = document.createElement("span");
        togglePassword.className = "toggle-password";
        togglePassword.textContent = "Show Password";
        togglePassword.onclick = function ()
        {
            passwordInput.type = passwordInput.type === "password" ? "text" : "password";
        };

         const errorMsg = document.createElement("p");
         errorMsg.className = "error";
         errorMsg.id = "error-msg";

        const loginButton = document.createElement("button");
        loginButton.textContent = "Login";
        loginButton.onclick = function () {
            const username = usernameInput.value;
            const password = passwordInput.value;

            if (username === "" || password === "") {
                errorMsg.textContent = "Please fill in all fields.";
                return;
            }

            if (username && password) {
                alert("Login successful!");
                return;
            } else {
                errorMsg.textContent = "Invalid username or password.";
            }
        };

        const forgotPasswordButton = document.createElement("button");
        forgotPasswordButton.textContent = "Forgot Password?";
        forgotPasswordButton.className = "forgot-password";
        forgotPasswordButton.onclick = function () {
            window.location.href = "forgot-password.html";
        };

        loginContainer.appendChild(usernameInput);
        loginContainer.appendChild(passwordInput);
        loginContainer.appendChild(togglePassword);
        loginContainer.appendChild(errorMsg);
        loginContainer.appendChild(loginButton);
        loginContainer.appendChild(forgotPasswordButton);