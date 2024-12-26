// Updates data structure
const updates = [
    {
        id: 1,
        title: "Major Gameplay Enhancement",
        date: "December 25, 2024",
        description: "Introducing new game mechanics and improved player controls for an enhanced gaming experience.",
        image: "images/update1.jpg",
        tag: "Update 1"
    },
    {
        id: 2,
        title: "New Character Classes",
        date: "December 20, 2024",
        description: "Explore new character classes with unique abilities and special powers.",
        image: "images/update2.jpg",
        tag: "Update 2"
    },
    {
        id: 3,
        title: "New Map Release",
        date: "December 15, 2024",
        description: "Discover a brand new map with challenging terrains and hidden secrets.",
        image: "images/update3.jpg",
        tag: "Update 3"
    }
];

// Performance optimized initialization
document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50
    });

    // Mobile menu functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                navLinks.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu after clicking a link
                navLinks?.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    });

    // Initialize updates if we're on the updates page
    const updatesContainer = document.getElementById('updatesContainer');
    if (updatesContainer) {
        initializeUpdates();
    }

    // Active link highlighting
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.7
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeId = entry.target.id;
                navItems.forEach(item => {
                    item.classList.toggle('active', item.getAttribute('href') === `#${activeId}`);
                });
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));
});

// Function to initialize updates
function initializeUpdates() {
    const updatesContainer = document.getElementById('updatesContainer');
    const updatesGrid = document.createElement('div');
    updatesGrid.className = 'updates-grid';

    // Create update cards
    updates.forEach((update, index) => {
        const updateCard = createUpdateCard(update, index);
        updatesGrid.appendChild(updateCard);
    });

    // Clear existing content and add the new grid
    updatesContainer.innerHTML = `
        <div class="updates-page">
            <div class="updates-header">
                <h1>Latest Updates</h1>
                <p>Stay informed about the latest features and improvements</p>
            </div>
        </div>
    `;
    updatesContainer.querySelector('.updates-page').appendChild(updatesGrid);

    // Add back to home button
    const backButton = document.createElement('div');
    backButton.className = 'back-to-home';
    backButton.innerHTML = `
        <a href="index.html" class="back-button">
            <i class="fas fa-arrow-left"></i>
            Back to Home
        </a>
    `;
    updatesContainer.querySelector('.updates-page').appendChild(backButton);
}

// Function to create an update card
function createUpdateCard(update, index) {
    const card = document.createElement('div');
    card.className = 'update-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', index * 100);

    card.innerHTML = `
        <div class="update-image">
            <span class="update-tag">${update.tag}</span>
            <img src="${update.image}" alt="${update.title}" onerror="this.src='images/default-update.jpg'">
        </div>
        <div class="update-content">
            <h3>${update.title}</h3>
            <div class="update-date">
                <i class="fas fa-calendar"></i>
                <span>${update.date}</span>
            </div>
            <p>${update.description}</p>
            <a href="#" class="update-link">Read More <i class="fas fa-arrow-right"></i></a>
        </div>
    `;

    return card;
}
