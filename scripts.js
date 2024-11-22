// Smooth scroll for internal navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // Remove the '#' character
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Handle external links separately
document.querySelectorAll('nav a:not([href^="#"])').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Optionally, you can add additional logic here if needed
    });
});

// Modal functionality
var modal = document.getElementById("myModal");
var btn = document.getElementsByClassName("open-modal")[0];
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Lightbox functionality
var lightbox = document.getElementById("lightbox");
var lightboxImg = document.getElementById("lightbox-img");

document.querySelectorAll('.feature-image').forEach(img => {
    img.addEventListener('click', function() {
        lightboxImg.src = this.src;
        lightbox.style.display = "block";
    });
});

lightbox.onclick = function(event) {
    if (event.target == lightbox) {
        lightbox.style.display = "none";
    }
}

// Typing animation
const words = ["Welcome", "Discover", "Learn"];
let i = 0;
let j = 0;
let currentWord = [];
let isDeleting = false;

function typeWriter() {
    const word = words[i % words.length];
    if (!isDeleting && j <= word.length) {
        currentWord.push(word.charAt(j));
        j++;
    } else if (isDeleting && j >= 0) {
        currentWord.pop();
        j--;
    }

    document.getElementById('typing-text').innerHTML = currentWord.join('');

    if (j === word.length) {
        isDeleting = true;
    } else if (j === 0) {
        isDeleting = false;
        i++;
    }

    setTimeout(typeWriter, isDeleting ? 100 : 200);
}

typeWriter();

// Scroll-based animations
window.addEventListener('scroll', () => {
    document.querySelectorAll('.fade-in-scroll').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - el.offsetHeight / 2) {
            el.classList.add('visible');
        }
    });
});

// Initial check for visible elements
window.dispatchEvent(new Event('scroll'));

// Newsletter Form Submission
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for subscribing!');
    this.reset();
});

// Feedback Form Submission
document.getElementById('feedback-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your feedback!');
    this.reset();
});

// Donation Form Submission
document.getElementById('donation-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your donation!');
    this.reset();
});
