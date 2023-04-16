const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    
    // toggle the icon
    // this.classList.toggle("bi-eye");
    togglePassword.classList.toggle("bi-eye");
});

// prevent form submit eita na dileo hobe.
const form = document.querySelector("form");
form.addEventListener('submit', function (e) {
    e.preventDefault();
});