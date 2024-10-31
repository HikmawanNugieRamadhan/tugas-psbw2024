document.getElementById("commentInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") { 
        event.preventDefault();  
        alert("Terimakasih sudah Berkomentar! ^•^");                }
});
function toggleTable() {
    var table = document.getElementById("infoTable");
    if (table.style.display === "none") {
        table.style.display = "block";
    } else {
        table.style.display = "none";
    }
}


document.getElementById('toggleDiscoverButton').addEventListener('click', function () {
    var discoverSection = document.getElementById('discoverSection');
    if (discoverSection.style.display === 'none') {
        discoverSection.style.display = 'block';
        this.textContent = 'Sembunyikan';
    } else {
        discoverSection.style.display = 'none';
        this.textContent = 'Lihat yang Lain?';
    }
});

let lastScrollY = window.scrollY;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
        navbar.classList.add("fade-out");
        navbar.classList.remove("fade-in");
    } else {
        navbar.classList.add("fade-in");
        navbar.classList.remove("fade-out");
    }
    lastScrollY = window.scrollY;
});