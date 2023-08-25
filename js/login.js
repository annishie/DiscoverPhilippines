document.addEventListener("DOMContentLoaded", function) () {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.getElementById("navbar");
    const modal = $("#login-modal .modal-content"); // Add this line
}
    menuIcon.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });

    const loginLink = document.getElementById("login-link"); // Add this line

    loginLink.addEventListener("click", function (e) { // Add this event listener
        e.preventDefault();

        modal.load("login.html", function(response, status, xhr) {
            if (status === "success") {
                modal.parent().show();
            } else {
                console.log("Error loading login.html");
            }
        });
    });