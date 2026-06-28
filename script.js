// Smooth Entrance Animation

const cards = document.querySelectorAll(
    '.glass-card, .skill-card, .project-card'
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold: 0.2
});

cards.forEach((card) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(80px)";
    card.style.transition = "all 1s ease";

    observer.observe(card);

});

// Contact Form Demo

document
    .getElementById("contactForm")
    .addEventListener("submit", async (e) => {

        e.preventDefault();

        const response = await fetch("/send-message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: "Portfolio Contact Message"
            })
        });

        if(response.ok){
            alert("Message sent successfully!");
        } else {
            alert("Failed to send message");
        }

    });