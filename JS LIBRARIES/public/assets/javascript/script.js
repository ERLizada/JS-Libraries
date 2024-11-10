// Initialize Swiper with responsive breakpoints, 30px gap, and overflow hidden
const topProductsSwiper = new Swiper('.top-products-carousel', {
    spaceBetween: 30, // 30px gap between cards
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: false, // Set to false to avoid looping cards back into view
    breakpoints: {
        1200: {
            slidesPerView: 4, // Show 4 cards on large screens
        },
        900: {
            slidesPerView: 3, // Show 3 cards on medium screens
        },
        0: {
            slidesPerView: 2, // Show 2 cards on mobile screens
        }
    }
});

const categorySwiper = new Swiper('.category-carousel', {
    spaceBetween: 30, // 30px gap between cards
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: false, // Disable loop to prevent showing excess cards
    breakpoints: {
        1200: {
            slidesPerView: 4, // Show 4 cards on large screens
        },
        900: {
            slidesPerView: 3, // Show 3 cards on medium screens
        },
        0: {
            slidesPerView: 2, // Show 2 cards on mobile screens
        }
    }
});



// Initialize Multiple.js on a specific element
multiple({
    selector: '.original-designs-section', // Apply to Original Designs Section
    background: '../imgs/HER02.jpg',       // Background image for the effect
    dimensions: [400, 400],
    pattern: 'cross'
});

// Initialize Cleave.js on email input
new Cleave('input[type="text"]', {
    delimiter: '-',
    blocks: [4, 4, 4, 4],
    uppercase: true
});

// Initialize floating label functionality and validation using jQuery
(function ($) {
    "use strict";

    // Floating label function
    function floatingLabel(onload) {
        $(".bt-flabels__wrapper input").each(function () {
            const $input = $(this);
            const $wrapper = $input.closest(".bt-flabels__wrapper");
            if ($input.val()) {
                $wrapper.addClass("bt-flabel__float");
            } else {
                $wrapper.removeClass("bt-flabel__float");
            }
        });
    }

    $(document).on("input", ".bt-flabels__wrapper input", function () {
        floatingLabel(false);
    });

    $(window).on("load", function () {
        floatingLabel(true);
    });

    // Initialize Parsley.js for form validation
    $(".js-flabels").parsley().on("form:error", function () {
        this.fields.forEach(function (field) {
            const $wrapper = field.$element.closest(".bt-flabels__wrapper");
            if (field.validationResult !== true) {
                $wrapper.addClass("bt-flabels__error");
            }
        });
    });

    $(".js-flabels").parsley().on("field:validated", function () {
        const $wrapper = this.$element.closest(".bt-flabels__wrapper");
        if (this.validationResult === true) {
            $wrapper.removeClass("bt-flabels__error");
        } else {
            $wrapper.addClass("bt-flabels__error");
        }
    });
})(jQuery);


function toggleMobileNav() {
    const mobileNav = document.getElementById('mobileNav');
    mobileNav.classList.toggle('active');
}

// Click a Card 
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card');
    const overlay = document.getElementById('overlay');

    cards.forEach(card => {
        card.addEventListener('click', function () {
            overlay.classList.add('active');
            card.classList.add('expanded');
            card.querySelector('.add-to-cart-button').classList.remove('hidden');
        });
    });

    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) {
            const expandedCard = document.querySelector('.card.expanded');
            if (expandedCard) {
                expandedCard.classList.remove('expanded');
                expandedCard.querySelector('.add-to-cart-button').classList.add('hidden');
                overlay.classList.remove('active');
            }
        }
    });
});


// Overlay and expandable card
const cards = document.querySelectorAll('.swiper-slide .card');
const overlay = document.querySelector('.overlay');

cards.forEach(card => {
    card.addEventListener('click', function () {
        overlay.classList.add('active');
        card.classList.add('expanded');
        overlay.appendChild(card);
    });
});

overlay.addEventListener('click', function (e) {
    if (e.target === overlay) {
        const expandedCard = overlay.querySelector('.card.expanded');
        if (expandedCard) {
            expandedCard.classList.remove('expanded');
            document.querySelector('.swiper-wrapper').appendChild(expandedCard);
            overlay.classList.remove('active');
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById('overlay');
    const cards = document.querySelectorAll('.card');

    // Function to expand the card
    function expandCard(card) {
        overlay.classList.add('active');
        card.classList.add('expanded');
        card.querySelector('.add-to-cart-button').classList.remove('hidden');
        overlay.appendChild(card); // Move the card into the overlay
    }

    // Function to reset the website state
    function resetWebsite() {
        const expandedCard = overlay.querySelector('.card.expanded');
        if (expandedCard) {
            expandedCard.classList.remove('expanded');
            expandedCard.querySelector('.add-to-cart-button').classList.add('hidden');
            document.querySelector('.swiper-wrapper').appendChild(expandedCard); // Move card back to original position
            overlay.classList.remove('active');
        }
    }

    // Add click event listener to each card
    cards.forEach(card => {
        card.addEventListener('click', function (event) {
            event.stopPropagation(); // Prevent click event from reaching the overlay
            expandCard(card);
        });
    });

    // Add click event listener to overlay to reset the website when clicking outside the card
    overlay.addEventListener('click', function (event) {
        if (event.target === overlay) {
            resetWebsite();
        }
    });

    // Add event listener to reset website when clicking outside the expanded card on the document
    document.addEventListener('click', function (event) {
        if (!overlay.contains(event.target) && overlay.classList.contains('active')) {
            resetWebsite();
        }
    });
});





// Mobile Nav toggle
const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobileNav');
burger.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});

