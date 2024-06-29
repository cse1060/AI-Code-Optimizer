document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector(".image").classList.add("slide-out");
    }, 3000);
    setTimeout(function() {
        window.location.href = "home.html";
    }, 5000);
});