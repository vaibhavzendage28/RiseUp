// Smooth scrolling with custom animation and offset for fixed navbar
document.querySelectorAll('.scroll-smooth').forEach(link => {
    link.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
        // Close dropdown if open
        const dropdown = document.getElementById('dropdownMenu');
        if (dropdown) {
        dropdown.classList.remove('show');
        }
        
        // Get navbar height
        const navHeight = document.querySelector('nav').offsetHeight;
        
        // Calculate position with offset
        const targetPosition = targetSection.offsetTop - navHeight;
        
        // Smooth scroll to target with offset
        window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
        });
    }
    });
});

// Get the elements
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

// Toggle dropdown on button click
dropdownToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    dropdownToggle.classList.toggle('active');
    dropdownMenu.classList.toggle('active');
});

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown-container')) {
        dropdownToggle.classList.remove('active');
        dropdownMenu.classList.remove('active');
    }
});

// Close dropdown when clicking on a menu item
const dropdownItems = document.querySelectorAll('.dropdown-item');
dropdownItems.forEach(item => {
    item.addEventListener('click', function() {
        dropdownToggle.classList.remove('active');
        dropdownMenu.classList.remove('active');
    });
});

// Navigation function (you'll need to implement this based on your needs)
function navigate(page) {
    console.log('Navigating to:', page);
    // Add your navigation logic here
    // For example: window.location.href = page + '.html';
}

// study material toggle
function toggleCard(header) {
    const content = header.nextElementSibling;
    header.classList.toggle('active');
    content.classList.toggle('active');
}

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();