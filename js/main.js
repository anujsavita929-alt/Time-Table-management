/* ===========================
   MAIN JAVASCRIPT - Navigation & Utilities
   =========================== */

// Navigation Function
function navigateTo(page) {
    window.location.href = page;
}

// Get URL parameters
function getURLParameter(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

// Toggle User Info Panel
function toggleUserInfo() {
    const panel = document.getElementById('userInfoPanel');
    if (panel) {
        panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
    }
}

// Toggle Settings Menu
function toggleSettings() {
    const dropdown = document.getElementById('settingsDropdown');
    if (dropdown) {
        dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
    }
}

// Close dropdowns on outside click
document.addEventListener('click', function(event) {
    const userTrigger = document.querySelector('.user-info-trigger');
    const settingsBtn = document.querySelector('.settings-btn');
    const userPanel = document.getElementById('userInfoPanel');
    const settingsDropdown = document.getElementById('settingsDropdown');

    if (userPanel && !userPanel.contains(event.target) && !userTrigger?.contains(event.target)) {
        userPanel.style.display = 'none';
    }

    if (settingsDropdown && !settingsDropdown.contains(event.target) && !settingsBtn?.contains(event.target)) {
        settingsDropdown.style.display = 'none';
    }
});

// Initialize LocalStorage
function initializeStorage() {
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify([]));
    }
    if (!localStorage.getItem('students')) {
        localStorage.setItem('students', JSON.stringify([]));
    }
    if (!localStorage.getItem('teachers')) {
        localStorage.setItem('teachers', JSON.stringify([]));
    }
    if (!localStorage.getItem('currentUser')) {
        localStorage.setItem('currentUser', JSON.stringify(null));
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeStorage();
    updateCurrentDate();
});

// Update current date and time
function updateCurrentDate() {
    const dateElement = document.getElementById('currentDate');
    const timeElement = document.getElementById('currentTime');

    if (dateElement || timeElement) {
        const now = new Date();
        const date = now.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        const time = now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });

        if (dateElement) dateElement.textContent = date;
        if (timeElement) timeElement.textContent = time;
    }

    // Update every minute
    setInterval(() => {
        const now = new Date();
        const time = now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
        if (timeElement) timeElement.textContent = time;
    }, 60000);
}

// Get greeting message based on time
function getGreetingMessage() {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning! Here's your schedule for today.";
    if (hour < 18) return "Good afternoon! Keep up with your schedule.";
    return "Good evening! Review your schedule for tomorrow.";
}

// Format number with animation
function animateCounter(element, targetNumber, duration = 1000) {
    let currentNumber = 0;
    const increment = targetNumber / (duration / 50);

    const interval = setInterval(() => {
        currentNumber += increment;
        if (currentNumber >= targetNumber) {
            element.textContent = targetNumber;
            element.style.animation = 'counter-pop 0.4s ease';
            clearInterval(interval);
        } else {
            element.textContent = Math.floor(currentNumber);
        }
    }, 50);
}

// Safe JSON parse
function safeJsonParse(value, defaultValue = null) {
    try {
        return JSON.parse(value);
    } catch (e) {
        return defaultValue;
    }
}

// Generate unique ID
function generateUniqueId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

// Format date
function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// Show toast message
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: ${type === 'success' ? '#27AE60' : '#E74C3C'};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slide-up 0.3s ease;
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slide-down 0.3s ease forwards';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Validate email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Validate password strength
function validatePassword(password) {
    return password.length >= 6;
}

// Get user avatar initials
function getAvatarInitials(name) {
    return name
        .split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
}

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add slide-up animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slide-up {
        from {
            transform: translateY(100px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes slide-down {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(100px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Smooth scroll to element
function smoothScroll(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Check if user is logged in
function isLoggedIn() {
    const currentUser = safeJsonParse(localStorage.getItem('currentUser'));
    return currentUser !== null;
}

// Get current user
function getCurrentUser() {
    return safeJsonParse(localStorage.getItem('currentUser'));
}

// Set current user
function setCurrentUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
}

// Logout
function logout() {
    localStorage.setItem('currentUser', JSON.stringify(null));
    navigateTo('index.html');
}

// Get count from storage
function getCount(type) {
    const items = safeJsonParse(localStorage.getItem(type), []);
    return items.length;
}

// Update counter display
function updateCounterDisplay() {
    const studentCount = document.getElementById('studentCount');
    const teacherCount = document.getElementById('teacherCount');
    
    if (studentCount) {
        studentCount.textContent = getCount('students');
    }
    if (teacherCount) {
        teacherCount.textContent = getCount('teachers');
    }
}

// Export to CSV
function exportToCSV(data, filename) {
    if (data.length === 0) {
        showToast('No data to export', 'error');
        return;
    }

    const headers = Object.keys(data[0]);
    const csv = [
        headers.join(','),
        ...data.map(row =>
            headers.map(header => `"${row[header] || ''}"`).join(',')
        )
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
}

console.log('Main.js loaded successfully');
