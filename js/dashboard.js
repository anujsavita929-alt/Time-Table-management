/* ===========================
   DASHBOARD JAVASCRIPT
   =========================== */

// Initialize Dashboard
function initializeDashboard() {
    const currentUser = getCurrentUser();

    if (!currentUser) {
        navigateTo('role-selection.html');
        return;
    }

    // Update user info
    updateUserInfo(currentUser);
    updateDashboardContent(currentUser);
    updateCounters();
    loadQuickActions(currentUser.role);
    updateGreeting();
}

// Update user info in header
function updateUserInfo(user) {
    const avatar = document.getElementById('avatar');
    const userName = document.getElementById('userName');
    const userInfoAvatar = document.getElementById('userInfoAvatar');
    const userInfoName = document.getElementById('userInfoName');
    const userInfoRole = document.getElementById('userInfoRole');
    const userInfoEmail = document.getElementById('userInfoEmail');
    const userInfoId = document.getElementById('userInfoId');
    const dashboardUserName = document.getElementById('dashboardUserName');

    if (avatar) avatar.textContent = user.avatar;
    if (userName) userName.textContent = user.fullname.split(' ')[0];
    if (userInfoAvatar) userInfoAvatar.textContent = user.avatar;
    if (userInfoName) userInfoName.textContent = user.fullname;
    if (userInfoRole) userInfoRole.textContent = user.role.charAt(0).toUpperCase() + user.role.slice(1);
    if (userInfoEmail) userInfoEmail.textContent = user.email;
    if (userInfoId) userInfoId.textContent = user.userId;
    if (dashboardUserName) dashboardUserName.textContent = user.fullname.split(' ')[0];
}

// Update dashboard content based on role
function updateDashboardContent(user) {
    const role = user.role;
    
    // Show/hide counters section based on role
    const countersSection = document.getElementById('countersSection');
    if (countersSection) {
        countersSection.style.display = role === 'principal' ? 'block' : 'none';
    }

    // Show/hide management section
    const managementSection = document.getElementById('managementSection');
    if (managementSection) {
        managementSection.style.display = (role === 'principal' || role === 'teacher') ? 'block' : 'none';
    }

    // Update greeting message
    const greetingMessage = document.getElementById('greetingMessage');
    if (greetingMessage) {
        greetingMessage.textContent = getGreetingMessage();
    }
}

// Update counters
function updateCounters() {
    const studentCount = getCount('students');
    const teacherCount = getCount('teachers');
    const classCount = Math.max(studentCount / 30, 1); // Rough estimate

    const studentCountEl = document.getElementById('studentCount');
    const teacherCountEl = document.getElementById('teacherCount');
    const classCountEl = document.getElementById('classCount');

    if (studentCountEl) {
        animateCounter(studentCountEl, studentCount);
    }
    if (teacherCountEl) {
        animateCounter(teacherCountEl, teacherCount);
    }
    if (classCountEl) {
        animateCounter(classCountEl, Math.ceil(classCount));
    }
}

// Load quick actions based on role
function loadQuickActions(role) {
    const actionButtons = document.getElementById('actionButtons');
    
    if (!actionButtons) return;

    let actions = [];

    if (role === 'student') {
        actions = [
            { icon: '📅', label: 'My Timetable', action: 'navigateTo("timetable.html")' },
            { icon: '📬', label: 'Notifications', action: 'alert("No new notifications")' },
            { icon: '📞', label: 'Contact Support', action: 'alert("Support: support@example.com")' }
        ];
    } else if (role === 'teacher') {
        actions = [
            { icon: '📅', label: 'My Schedule', action: 'navigateTo("timetable.html")' },
            { icon: '👥', label: 'My Classes', action: 'alert("View your assigned classes")' },
            { icon: '✓', label: 'Mark Attendance', action: 'alert("Attendance marking")' },
            { icon: '📊', label: 'Class Reports', action: 'alert("Generate class reports")' }
        ];
    } else if (role === 'principal') {
        actions = [
            { icon: '👥', label: 'Students', action: 'navigateTo("student-management.html")' },
            { icon: '👨‍🏫', label: 'Teachers', action: 'navigateTo("teacher-management.html")' },
            { icon: '📅', label: 'Timetable', action: 'navigateTo("timetable.html")' },
            { icon: '📊', label: 'Reports', action: 'alert("View detailed reports")' }
        ];
    }

    actionButtons.innerHTML = actions.map(action => `
        <div class="action-btn" onclick="${action.action}">
            <div class="action-btn-icon">${action.icon}</div>
            <h4>${action.label}</h4>
        </div>
    `).join('');
}

// Update greeting
function updateGreeting() {
    const greetingMessage = document.getElementById('greetingMessage');
    if (greetingMessage) {
        greetingMessage.textContent = getGreetingMessage();
    }
}

// Toggle add student form
function toggleAddStudentForm() {
    const form = document.getElementById('addStudentForm');
    if (form) {
        form.style.display = form.style.display === 'none' ? 'block' : 'none';
    }
}

// Toggle add teacher form
function toggleAddTeacherForm() {
    const form = document.getElementById('addTeacherForm');
    if (form) {
        form.style.display = form.style.display === 'none' ? 'block' : 'none';
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('dashboard')) {
        initializeDashboard();
    }
});

console.log('Dashboard.js loaded successfully');
