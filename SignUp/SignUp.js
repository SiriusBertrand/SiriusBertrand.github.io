// Get DOM elements
const signupForm = document.getElementById("signup-form");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const secretQuestionInput = document.getElementById("secret-question");
const secretAnswerInput = document.getElementById("secret-answer");
const planInput = document.getElementById("plan");

// Form submission
signupForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const username = usernameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;
  const secretQuestion = secretQuestionInput.value;
  const secretAnswer = secretAnswerInput.value;
  const plan = planInput.value;

  // Perform form validation
  if (!username || !password || !secretQuestion || !secretAnswer || !plan) {
    // Display error message
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = "Please fill in all fields.";
    return;
  }

  // Validate username criteria
  const usernamePattern = /^[a-zA-Z0-9.]+$/;
  const disallowedCharacters = ["&", "=", "_", "'", "-", "+", ",", "<", ">"];

  if (!usernamePattern.test(username)) {
    // Display error message
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent =
      "Invalid username format. Usernames can only contain letters (a-z), numbers (0-9), and periods (.), and cannot contain disallowed characters.";
    return;
  }

  for (let i = 0; i < disallowedCharacters.length; i++) {
    if (username.includes(disallowedCharacters[i])) {
      // Display error message
      const errorMessage = document.getElementById("error-message");
      errorMessage.textContent =
        "Invalid username format. Usernames cannot contain disallowed characters.";
      return;
    }
  }

  // Validate password criteria
  if (password.length < 8) {
    // Display error message
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = "Password should be at least 8 characters long.";
    return;
  }

  // Validate email criteria
  const emailPattern = /^\S+@\S+\.\S+$/;
  if (!emailPattern.test(email)) {
    // Display error message
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = "Invalid email format.";
    return;
  }

  // Reset error message
  const errorMessage = document.getElementById("error-message");
  errorMessage.textContent = "";

  // Log form values
  console.log("Username:", username);
  console.log("Email:", email);
  console.log("Password:", password);
  console.log("Secret Question:", secretQuestion);
  console.log("Secret Answer:", secretAnswer);
  console.log("Plan:", plan);

  // Redirect to confirmation page
  window.location.href = "/Confirmation/index.html";
});
