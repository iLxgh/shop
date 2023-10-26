const menuBtn = document.getElementById("menu-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
menu.classList.toggle("active");
});





const galleryImages = document.querySelectorAll('.gallery img');
const selectedImage = document.getElementById('selected-image');

galleryImages.forEach((image) => {
    image.addEventListener('click', () => {
        selectedImage.src = image.src;
        selectedImage.alt = image.alt;
    });
});
