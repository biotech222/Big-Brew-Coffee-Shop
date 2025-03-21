document.addEventListener("DOMContentLoaded", function () {
    const menuButtons = document.querySelectorAll(".menu-bar button");
    menuButtons.forEach(button => {
        button.addEventListener("click", function () {
            const sectionId = this.getAttribute("data-section");
            toggleSection(sectionId);
        });
    });

    document.querySelectorAll('.section').forEach(section => {
        section.style.display = "none"; 
    });

    const productSections = document.querySelectorAll(".product-section");
    productSections.forEach(section => {
        section.style.display = "none"; 
    });

    const categoryButtons = document.querySelectorAll(".category-button");
    categoryButtons.forEach(button => {
        button.addEventListener("click", function () {
            const category = this.getAttribute("data-category");
            const targetSection = document.getElementById(category);

            if (targetSection.style.display === "none" || targetSection.style.display === "") {
                targetSection.style.display = "flex"; 
            } else {
                targetSection.style.display = "none"; 
            }
        });
    });
});

function toggleSection(sectionId) {
  
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = "none";
        section.classList.remove('active');
    });

    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = "flex";
        selectedSection.classList.add('active');
    }

    resetSlides(sectionId);
}

function resetSlides(sectionId) {
    let slides = document.querySelectorAll(`#${sectionId} .mySlides`);
    if (slides.length > 0) {
        slides.forEach(slide => slide.style.display = "none");
        slides[0].style.display = "block"; 
    }
}

function plusSlides(n) {
    let activeSection = document.querySelector('.section.active');
    if (!activeSection) return;

    let slides = activeSection.querySelectorAll(".mySlides");
    if (slides.length === 0) return;

    let currentSlideIndex = Array.from(slides).findIndex(slide => slide.style.display === "block");
    slides[currentSlideIndex].style.display = "none";

    let newIndex = (currentSlideIndex + n + slides.length) % slides.length;
    slides[newIndex].style.display = "block";
}

document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const drinkType = document.getElementById("drinkType").value;
    const flavor = document.getElementById("flavor").value;
    const size = document.getElementById("size").value;
    const addons = Array.from(document.getElementById("addons").selectedOptions).map(option => option.value).join(", ");
    const quantity = document.getElementById("quantity").value;

    alert(`Order Summary:\n${quantity}x ${size} ${flavor} (${drinkType})\nAdd-Ons: ${addons || "None"}`);
});