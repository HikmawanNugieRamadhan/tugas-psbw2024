// jQuery implementasi
$(document).ready(function () {
    $(".about-me").hide();

    $("#toggleAbout").click(function () {
        $(".about-me").slideToggle("slow");
    });

    $(".profile-image img").hide().fadeIn(2000);
});

// DOM implementasi
document.addEventListener("DOMContentLoaded", function () {
    const profileImage = document.getElementsByClassName("profile-image")[0].getElementsByTagName("img")[0];

    // Mengatur border dan border-radius agar gambar tetap berbentuk lingkaran
    profileImage.style.border = "5px solid white";
    profileImage.style.borderRadius = "50%";

    // Mengganti ukuran font pada title profile
    document.getElementById("profile-title").style.fontSize = "50px";

    // Menambahkan kata atau merubah kata di about me
    document.getElementById("aboutMeText").textContent = "Saya adalah mahasiswa dari Program Studi Sistem dan Teknologi Informasi (SISTEKIN) UNTAG Surabaya, dan Saya sekarang fokus pada pengembangan aplikasi web dan mobile di HIMASISTA! (aamiin)";

    // Toggle theme function
    document.getElementById("toggleTheme").addEventListener("click", function () {
        document.body.classList.toggle("light-mode");
    });
});