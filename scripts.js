document.addEventListener("DOMContentLoaded", function() {
    // Get social links
    const portfolioLink = document.getElementById("portfolio-link");
    const twitterLink = document.getElementById("twitter-link");
    const whatsappLink = document.getElementById("whatsapp-link");
    const emailLink = document.getElementById("email-link");

    // Log click function
    function logClick(event) {
        console.log(`Clicked on: ${event.currentTarget.id}`);
    }

    // Attach click event listeners to social links
    portfolioLink.addEventListener("click", logClick);
    twitterLink.addEventListener("click", logClick);
    whatsappLink.addEventListener("click", logClick);
    emailLink.addEventListener("click", logClick);

    // Get theme toggle button
    const themeToggle = document.getElementById("theme-toggle");

    // Theme toggle function
    themeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });
});






//Event Listener 'DOMContentLoaded' event ensure that the script run after the DOM is fully loaded
// Get Elements: Get the elements by their IDs
// Log Click: the 'logClick' function logs the ID of the clicked element

