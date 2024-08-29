document.addEventListener('DOMContentLoaded', function() {
    console.log('Document loaded. Add your JavaScript here.');

    const bookingButton = document.getElementById('bookingButton');
    const modal = document.getElementById('packageModal');
    const closeModalBtn = modal.querySelector('.close-btn');
    const confirmBookingButton = document.getElementById('confirmBookingButton');

    bookingButton.addEventListener('click', handleBooking);
    closeModalBtn.addEventListener('click', closeModal);
    confirmBookingButton.addEventListener('click', confirmBooking);

    let slideIndex = 1;
    showSlides(slideIndex);

    function handleBooking() {
        let userEmail = prompt("Enter your email address to receive booking details:");

        if (userEmail) {
            alert("Booking details have been sent to " + userEmail);
            displayPackageDetails();
        }
    }

    function displayPackageDetails() {
        const packageDetails = {
            title: "7 Days and 6 Nights in Bali",
            description: "Enjoy an unforgettable experience in Bali with beautiful beaches, exotic temples, and vibrant culture.",
            images: [
                "../images/bali1.jpg",
                "../images/bali2.jpg",
                "../images/bali3.jpg",
                "../images/bali4.jpg",
                "../images/bali5.jpg"
            ]
        };

        // Populate modal content
        document.getElementById('modalTitle').textContent = packageDetails.title;
        document.getElementById('modalDescription').textContent = packageDetails.description;
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    function confirmBooking() {
        alert("Your booking has been confirmed!");
        closeModal();
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("slides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    // Attach slider functions to the global scope so they can be used in the HTML
    window.plusSlides = plusSlides;
    window.currentSlide = currentSlide;
});
