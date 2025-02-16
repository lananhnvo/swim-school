// login
// Function to open the login modal
function openLoginModal() {
    var loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
    loginModal.show();
}

// Function to load the login modal dynamically into all pages
document.addEventListener("DOMContentLoaded", function () {
    fetch("login-modal.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("beforeend", data);
        });
});

// booking -> confirmation
// Function to handle booking and redirect to confirmation page
function saveBookingDetails() {
    // Store default booking details (even if no input is provided)
    sessionStorage.setItem("bookingDate", "March 10, 2025");
    sessionStorage.setItem("bookingTime", "10:00 AM");
    sessionStorage.setItem("bookingLocation", "Main Pool");
    sessionStorage.setItem("userEmail", "user@example.com"); // Dummy email

    // Redirect to confirmation page
    window.location.href = "confirmation.html";
}

// Function to load booking details on confirmation page
document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("booking-date")) {
        document.getElementById("booking-date").textContent = sessionStorage.getItem("bookingDate") || "Not provided";
        document.getElementById("booking-time").textContent = sessionStorage.getItem("bookingTime") || "Not provided";
        document.getElementById("booking-location").textContent = sessionStorage.getItem("bookingLocation") || "Not provided";
        document.getElementById("user-email").textContent = sessionStorage.getItem("userEmail") || "Not provided";
    }
});
