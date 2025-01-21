// Ensure the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select the input box and buttons container elements
    var inputBox = document.querySelector(".input-box");
    var buttons = document.querySelector(".buttons");

    // Animate the input box to the center of the page
    gsap.to(inputBox, { 
        y: (window.innerHeight - inputBox.offsetHeight) / 2, // Adjusts the position to the center
        duration: 2, // Duration of the animation in seconds
        ease: "power1.inOut" // Easing function for a smooth animation
    });

    // Animate the buttons container to the center of the page
    gsap.to(buttons, { 
        y: (window.innerHeight - buttons.offsetHeight) / 2 + 60, // Adjusts the position slightly below the input box
        duration: 2, // Duration of the animation in seconds
        ease: "power1.inOut" // Easing function for a smooth animation
    });
});
