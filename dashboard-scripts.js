// Dashboard Scripts

// Wait for DOM to be fully ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeDashboard);
} else {
    // DOM is already ready
    initializeDashboard();
}

function initializeDashboard() {
    // Initialize all dashboard functions
    try {
        console.log('Initializing dashboard functions...');
        initThemeToggle();
        initLogout();
        initSwapDashboard();
        initCounterAnimations();
        console.log('Dashboard functions initialized successfully');
    } catch (error) {
        console.error('Error initializing dashboard:', error);
    }
}

// Theme Toggle
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    if (!themeToggle) {
        console.warn('Theme toggle button not found');
        return;
    }

    console.log('Theme toggle button found');

    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Apply theme on load
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.textContent = '☀';
    } else {
        body.classList.remove('dark-mode');
        themeToggle.textContent = '◑';
    }

    // Remove any existing listeners
    const newThemeToggle = themeToggle.cloneNode(true);
    themeToggle.parentNode.replaceChild(newThemeToggle, themeToggle);
    
    // Add click event listener to new element
    const toggleBtn = document.getElementById('themeToggle');
    toggleBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Theme toggle clicked');
        
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            toggleBtn.textContent = '☀';
        } else {
            localStorage.setItem('theme', 'light');
            toggleBtn.textContent = '◑';
        }
    });
}

// Swap Dashboard Functionality
function initSwapDashboard() {
    const swapBtn = document.getElementById('swapBtn');
    const dashboardType = document.getElementById('dashboardType');
    
    if (!swapBtn) {
        console.warn('Swap button not found');
        return;
    }
    
    console.log('Swap button found');
    
    // Check current page more reliably
    const currentPage = window.location.pathname || window.location.href;
    const isAdmin = currentPage.includes('admin-dashboard.html') || currentPage.includes('admin-dashboard');
    
    // Update button text and dashboard type based on current page
    if (isAdmin) {
        if (dashboardType) dashboardType.textContent = 'Admin Dashboard';
        const span = swapBtn.querySelector('span');
        if (span) span.textContent = 'User';
        swapBtn.setAttribute('title', 'Switch to User Dashboard');
    } else {
        if (dashboardType) dashboardType.textContent = 'User Dashboard';
        const span = swapBtn.querySelector('span');
        if (span) span.textContent = 'Admin';
        swapBtn.setAttribute('title', 'Switch to Admin Dashboard');
    }
    
    // Remove any existing listeners by cloning
    const newSwapBtn = swapBtn.cloneNode(true);
    swapBtn.parentNode.replaceChild(newSwapBtn, swapBtn);
    
    // Add click event listener to new element
    const swapButton = document.getElementById('swapBtn');
    swapButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Swap button clicked');
        
        if (isAdmin) {
            // Switch to User Dashboard
            window.location.href = 'dashboard.html';
        } else {
            // Switch to Admin Dashboard
            window.location.href = 'admin-dashboard.html';
        }
    });
}

// Logout Functionality
function initLogout() {
    const logoutBtn = document.getElementById('logoutBtn');
    
    if (!logoutBtn) {
        console.warn('Logout button not found');
        return;
    }
    
    console.log('Logout button found');
    
    // Remove any existing listeners by cloning
    const newLogoutBtn = logoutBtn.cloneNode(true);
    logoutBtn.parentNode.replaceChild(newLogoutBtn, logoutBtn);
    
    // Add click event listener to new element
    const logoutButton = document.getElementById('logoutBtn');
    
    // Remove any existing onclick handlers first
    logoutButton.onclick = null;
    
    logoutButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Logout button clicked');
        
        if (confirm('Are you sure you want to logout?')) {
            // Clear any stored data if needed
            // localStorage.clear();
            
            // Redirect to home page - use replace to prevent back button
            try {
                window.location.replace('index.html');
            } catch (error) {
                // Fallback if replace doesn't work
                console.log('Using fallback redirect method');
                window.location.href = 'index.html';
            }
        }
        return false;
    }, false);
}

// Counter Animations
function initCounterAnimations() {
    const statValues = document.querySelectorAll('.stat-value');
    
    const animateCounter = (element) => {
        const target = parseInt(element.getAttribute('data-target')) || 0;
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            
            if (current < target) {
                // Format number based on target size
                const value = Math.floor(current);
                if (element.textContent.includes('₹')) {
                    element.textContent = '₹' + formatNumber(value);
                } else {
                    element.textContent = formatNumber(value);
                }
                requestAnimationFrame(updateCounter);
            } else {
                // Final value
                const finalValue = formatNumber(target);
                if (element.textContent.includes('₹') || element.getAttribute('data-target') >= 1000000) {
                    element.textContent = '₹' + finalValue;
                } else {
                    element.textContent = finalValue;
                }
            }
        };
        
        updateCounter();
    };
    
    // Use Intersection Observer to trigger animation when visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                if (!element.classList.contains('animated')) {
                    element.classList.add('animated');
                    animateCounter(element);
                }
            }
        });
    }, {
        threshold: 0.5
    });
    
    statValues.forEach(stat => {
        observer.observe(stat);
    });
}

// Format number with commas
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toLocaleString('en-IN');
}

// Greeting Function for User Dashboard
function initGreeting() {
    const greetingElement = document.getElementById('greeting');
    if (!greetingElement) return;
    
    const hour = new Date().getHours();
    let greeting;
    
    if (hour < 12) {
        greeting = 'Good Morning!';
    } else if (hour < 18) {
        greeting = 'Good Afternoon!';
    } else {
        greeting = 'Good Evening!';
    }
    
    greetingElement.textContent = greeting;
}

// Smooth scroll for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

