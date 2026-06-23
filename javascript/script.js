// ==========================
// AUTOMATIC COPYRIGHT YEAR
// ==========================
document.getElementById("year").textContent =
new Date().getFullYear();


// ==========================
// CONTACT FORM VALIDATION
// ==========================
function validateForm() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please complete all fields before submitting.");
        return false;
    }

    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    alert("Thank you for contacting Blush Boutique!");
    return true;
}


// ==========================
// WELCOME BUTTON MESSAGE
// ==========================
function welcomeMessage() {
    alert("Welcome to Blush Boutique! Explore our beauty and skincare collection.");
}