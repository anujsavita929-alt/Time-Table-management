/* ===========================
   AUTHENTICATION JAVASCRIPT
   =========================== */

// Set page title based on role
function initializeAuthPage() {
    const role = getURLParameter('role') || 'student';
    const roleText = role.charAt(0).toUpperCase() + role.slice(1);
    const roleBadge = document.getElementById('roleBadge');
    const roleTextEl = document.getElementById('roleText');
    const pageTitle = document.getElementById('pageTitle');

    if (roleText) {
        roleTextEl.textContent = roleText;
    }

    if (pageTitle && window.location.pathname.includes('signup')) {
        pageTitle.textContent = `Create ${roleText} Account`;
    }
}

// Initialize login form
function initializeLoginForm() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        initializeAuthPage();
        
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleLogin();
        });
    }
}

// Initialize signup form
function initializeSignupForm() {
    const signupForm = document.getElementById('signupForm');
    
    if (signupForm) {
        initializeAuthPage();
        updateSignupCounter();
        
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleSignup();
        });
    }
}

// Handle Login
function handleLogin() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const role = getURLParameter('role') || 'student';

    if (!validateEmail(email)) {
        showToast('Please enter a valid email', 'error');
        return;
    }

    if (!validatePassword(password)) {
        showToast('Password must be at least 6 characters', 'error');
        return;
    }

    // Get users from storage
    const users = safeJsonParse(localStorage.getItem('users'), []);
    const user = users.find(u => u.email === email && u.role === role);

    if (!user) {
        showToast('Invalid email or password', 'error');
        return;
    }

    // For demo purposes, password is not encrypted
    if (user.password !== password) {
        showToast('Invalid email or password', 'error');
        return;
    }

    // Set current user
    setCurrentUser(user);
    showToast('Login successful! Redirecting...', 'success');

    setTimeout(() => {
        navigateTo('dashboard.html');
    }, 1500);
}

// Handle Signup
function handleSignup() {
    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const userId = document.getElementById('userId').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const role = getURLParameter('role') || 'student';

    // Validation
    if (!fullname) {
        showToast('Please enter your full name', 'error');
        return;
    }

    if (!validateEmail(email)) {
        showToast('Please enter a valid email', 'error');
        return;
    }

    if (!userId) {
        showToast('Please enter an ID number', 'error');
        return;
    }

    if (!validatePassword(password)) {
        showToast('Password must be at least 6 characters', 'error');
        return;
    }

    if (password !== confirmPassword) {
        showToast('Passwords do not match', 'error');
        return;
    }

    // Check if user already exists
    const users = safeJsonParse(localStorage.getItem('users'), []);
    if (users.some(u => u.email === email)) {
        showToast('Email already registered', 'error');
        return;
    }

    // Create new user
    const newUser = {
        id: generateUniqueId(),
        fullname: fullname,
        email: email,
        userId: userId,
        password: password,
        role: role,
        createdAt: new Date().toISOString(),
        avatar: getAvatarInitials(fullname)
    };

    // Add to users list
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Add to role-specific list
    const roleList = safeJsonParse(localStorage.getItem(role + 's'), []);
    roleList.push({
        id: newUser.id,
        name: fullname,
        email: email,
        userId: userId,
        role: role,
        status: 'Active',
        createdAt: new Date().toISOString()
    });
    localStorage.setItem(role + 's', JSON.stringify(roleList));

    // Update counter
    updateSignupCounter();

    // Show success message
    const form = document.getElementById('signupForm');
    const successMessage = document.getElementById('successMessage');
    const counterValue = document.getElementById('counterValue');

    if (form) form.style.display = 'none';
    if (successMessage) successMessage.style.display = 'flex';
    if (counterValue) counterValue.textContent = roleList.length;

    // Set current user
    setCurrentUser(newUser);

    // Redirect after 2 seconds
    setTimeout(() => {
        navigateTo('dashboard.html');
    }, 2000);
}

// Update signup counter
function updateSignupCounter() {
    const role = getURLParameter('role') || 'student';
    const counterValue = document.getElementById('counterValue');
    const formCounter = document.getElementById('formCounter');
    const count = getCount(role + 's');

    if (counterValue) {
        counterValue.textContent = count;
    }
    if (formCounter) {
        formCounter.textContent = count;
    }
}

// Listen for role parameter changes and update UI
document.addEventListener('DOMContentLoaded', function() {
    const role = getURLParameter('role');
    
    if (window.location.pathname.includes('login')) {
        initializeLoginForm();
    }
    
    if (window.location.pathname.includes('signup')) {
        initializeSignupForm();
    }

    // Update counter periodically
    setInterval(updateSignupCounter, 1000);
});

console.log('Auth.js loaded successfully');
