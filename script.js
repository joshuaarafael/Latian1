document.addEventListener("DOMContentLoaded", function() {
    const profilePic = document.getElementById("profilePic");

    profilePic.addEventListener("mouseenter", function() {
        profilePic.classList.add("flip");
        profilePic.src = "image/s.webp"; // Ganti dengan gambar lain
    });

    profilePic.addEventListener("mouseleave", function() {
        profilePic.classList.remove("flip");
        profilePic.src = "image/a.webp"; // Kembali ke gambar awal
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const bubbleContainer = document.createElement("div");
    bubbleContainer.classList.add("bubbles");
    document.body.appendChild(bubbleContainer);

    for (let i = 0; i < 7; i++) {
        let bubble = document.createElement("span");
        bubbleContainer.appendChild(bubble);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const title = document.querySelector("h2");
    const text = "Biodata saya";
    let i = 0;

    function typeEffect() {
        if (i < text.length) {
            title.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeEffect, 150);
        }
    }

    title.innerHTML = ""; 
    typeEffect();
});
