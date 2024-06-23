function showSection(id) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
}

let currentIndex = 0;
const images = document.querySelectorAll('.gallery img');
const captions = document.querySelectorAll('.gallery .caption');

function showSlide(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        captions[i].style.display = 'none';
    });
    images[index].classList.add('active');
    captions[index].style.display = 'block';
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
}

setInterval(nextSlide, 4000); // Change image every 4 seconds
