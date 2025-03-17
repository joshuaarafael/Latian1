document.addEventListener("DOMContentLoaded", function() {
    const profilePic = document.getElementById("profilePic");

    profilePic.addEventListener("mouseenter", function() {
        profilePic.classList.add("flip");
        profilePic.src = "image/a.jpg"; // Ganti dengan gambar lain
    });

    profilePic.addEventListener("mouseleave", function() {
        profilePic.classList.remove("flip");
        profilePic.src = "image/s.jpg"; // Kembali ke gambar awal
    });
});
