/* ===========================
   MANAGEMENT JAVASCRIPT
   =========================== */

// Initialize Management Page
function initializeManagement() {
    const currentUser = getCurrentUser();

    if (!currentUser) {
        navigateTo('role-selection.html');
        return;
    }

    updateUserInfo(currentUser);
    const isStudent = window.location.pathname.includes('student-management');
    const isTeacher = window.location.pathname.includes('teacher-management');

    if (isStudent) {
        initializeStudentManagement();
    } else if (isTeacher) {
        initializeTeacherManagement();
    }
}

// Initialize Student Management
function initializeStudentManagement() {
    loadStudents();
    setupStudentForm();
    setupSearch('students');

    const addBtn = document.querySelector('.action-bar button');
    if (addBtn) {
        addBtn.addEventListener('click', toggleAddStudentForm);
    }
}

// Initialize Teacher Management
function initializeTeacherManagement() {
    loadTeachers();
    setupTeacherForm();
    setupSearch('teachers');

    const addBtn = document.querySelector('.action-bar button');
    if (addBtn) {
        addBtn.addEventListener('click', toggleAddTeacherForm);
    }
}

// Load Students
function loadStudents() {
    const students = safeJsonParse(localStorage.getItem('students'), []);
    const tbody = document.getElementById('studentsTableBody');
    const emptyState = document.getElementById('emptyState');
    const totalStudents = document.getElementById('totalStudents');
    const activeStudents = document.getElementById('activeStudents');
    const formCounter = document.getElementById('formCounter');

    if (totalStudents) {
        totalStudents.textContent = students.length;
    }

    if (activeStudents) {
        activeStudents.textContent = students.filter(s => s.status === 'Active').length;
    }

    if (formCounter) {
        formCounter.textContent = students.length;
    }

    if (tbody) {
        if (students.length === 0) {
            tbody.innerHTML = '';
            if (emptyState) emptyState.style.display = 'block';
        } else {
            if (emptyState) emptyState.style.display = 'none';
            tbody.innerHTML = students.map(student => `
                <tr>
                    <td>${student.userId}</td>
                    <td>${student.name}</td>
                    <td>${student.email}</td>
                    <td>${student.class || 'N/A'}</td>
                    <td>${student.phone || 'N/A'}</td>
                    <td>
                        <span class="status-badge status-${student.status.toLowerCase()}">
                            ${student.status}
                        </span>
                    </td>
                    <td>
                        <button class="action-icon" onclick="editStudent('${student.id}')">✎</button>
                        <button class="action-icon delete" onclick="deleteStudent('${student.id}')">🗑</button>
                    </td>
                </tr>
            `).join('');

            // Add CSS for status badges
            const style = document.createElement('style');
            style.textContent = `
                .status-badge {
                    padding: 4px 12px;
                    border-radius: 20px;
                    font-size: 12px;
                    font-weight: 600;
                }
                .status-active {
                    background: #d4edda;
                    color: #155724;
                }
                .status-inactive {
                    background: #f8d7da;
                    color: #721c24;
                }
                .action-icon {
                    background: transparent;
                    border: none;
                    font-size: 16px;
                    cursor: pointer;
                    margin: 0 4px;
                }
                .action-icon.delete {
                    color: #E74C3C;
                }
            `;
            if (!document.getElementById('managementStyles')) {
                style.id = 'managementStyles';
                document.head.appendChild(style);
            }
        }
    }
}

// Load Teachers
function loadTeachers() {
    const teachers = safeJsonParse(localStorage.getItem('teachers'), []);
    const tbody = document.getElementById('teachersTableBody');
    const emptyState = document.getElementById('emptyState');
    const totalTeachers = document.getElementById('totalTeachers');
    const activeTeachers = document.getElementById('activeTeachers');
    const formCounter = document.getElementById('formCounter');

    if (totalTeachers) {
        totalTeachers.textContent = teachers.length;
    }

    if (activeTeachers) {
        activeTeachers.textContent = teachers.filter(t => t.status === 'Active').length;
    }

    if (formCounter) {
        formCounter.textContent = teachers.length;
    }

    if (tbody) {
        if (teachers.length === 0) {
            tbody.innerHTML = '';
            if (emptyState) emptyState.style.display = 'block';
        } else {
            if (emptyState) emptyState.style.display = 'none';
            tbody.innerHTML = teachers.map(teacher => `
                <tr>
                    <td>${teacher.userId}</td>
                    <td>${teacher.name}</td>
                    <td>${teacher.email}</td>
                    <td>${teacher.subject || 'N/A'}</td>
                    <td>${teacher.classes || 'N/A'}</td>
                    <td>${teacher.phone || 'N/A'}</td>
                    <td>
                        <span class="status-badge status-${teacher.status.toLowerCase()}">
                            ${teacher.status}
                        </span>
                    </td>
                    <td>
                        <button class="action-icon" onclick="editTeacher('${teacher.id}')">✎</button>
                        <button class="action-icon delete" onclick="deleteTeacher('${teacher.id}')">🗑</button>
                    </td>
                </tr>
            `).join('');
        }
    }
}

// Setup Student Form
function setupStudentForm() {
    const form = document.getElementById('studentForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            addStudent();
        });
    }
}

// Setup Teacher Form
function setupTeacherForm() {
    const form = document.getElementById('teacherForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            addTeacher();
        });
    }
}

// Add Student
function addStudent() {
    const name = document.getElementById('studentName').value.trim();
    const id = document.getElementById('studentId').value.trim();
    const email = document.getElementById('studentEmail').value.trim();
    const classVal = document.getElementById('studentClass').value;
    const phone = document.getElementById('studentPhone').value.trim();
    const status = document.getElementById('studentStatus').value;

    if (!name || !id || !email || !classVal) {
        showToast('Please fill all required fields', 'error');
        return;
    }

    const students = safeJsonParse(localStorage.getItem('students'), []);
    
    if (students.some(s => s.email === email)) {
        showToast('Student with this email already exists', 'error');
        return;
    }

    const newStudent = {
        id: generateUniqueId(),
        userId: id,
        name: name,
        email: email,
        class: classVal,
        phone: phone,
        status: status,
        createdAt: new Date().toISOString()
    };

    students.push(newStudent);
    localStorage.setItem('students', JSON.stringify(students));

    showToast(`Student ${name} added successfully!`, 'success');
    
    // Reset form
    document.getElementById('studentForm').reset();
    toggleAddStudentForm();
    loadStudents();
    updateCounterDisplay();
}

// Add Teacher
function addTeacher() {
    const name = document.getElementById('teacherName').value.trim();
    const id = document.getElementById('teacherId').value.trim();
    const email = document.getElementById('teacherEmail').value.trim();
    const subject = document.getElementById('teacherSubject').value.trim();
    const phone = document.getElementById('teacherPhone').value.trim();
    const status = document.getElementById('teacherStatus').value;
    const classes = document.getElementById('teacherClasses').value.trim();

    if (!name || !id || !email || !subject) {
        showToast('Please fill all required fields', 'error');
        return;
    }

    const teachers = safeJsonParse(localStorage.getItem('teachers'), []);
    
    if (teachers.some(t => t.email === email)) {
        showToast('Teacher with this email already exists', 'error');
        return;
    }

    const newTeacher = {
        id: generateUniqueId(),
        userId: id,
        name: name,
        email: email,
        subject: subject,
        phone: phone,
        status: status,
        classes: classes,
        createdAt: new Date().toISOString()
    };

    teachers.push(newTeacher);
    localStorage.setItem('teachers', JSON.stringify(teachers));

    showToast(`Teacher ${name} added successfully!`, 'success');
    
    // Reset form
    document.getElementById('teacherForm').reset();
    toggleAddTeacherForm();
    loadTeachers();
    updateCounterDisplay();
}

// Delete Student
function deleteStudent(studentId) {
    if (!confirm('Are you sure you want to delete this student?')) return;

    const students = safeJsonParse(localStorage.getItem('students'), []);
    const filtered = students.filter(s => s.id !== studentId);
    localStorage.setItem('students', JSON.stringify(filtered));

    showToast('Student deleted successfully', 'success');
    loadStudents();
    updateCounterDisplay();
}

// Delete Teacher
function deleteTeacher(teacherId) {
    if (!confirm('Are you sure you want to delete this teacher?')) return;

    const teachers = safeJsonParse(localStorage.getItem('teachers'), []);
    const filtered = teachers.filter(t => t.id !== teacherId);
    localStorage.setItem('teachers', JSON.stringify(filtered));

    showToast('Teacher deleted successfully', 'success');
    loadTeachers();
    updateCounterDisplay();
}

// Setup Search
function setupSearch(type) {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(function() {
            const query = this.value.toLowerCase();
            filterResults(type, query);
        }, 300));
    }
}

// Filter Results
function filterResults(type, query) {
    const tbody = type === 'students' ? 
        document.getElementById('studentsTableBody') : 
        document.getElementById('teachersTableBody');

    if (!tbody) return;

    const rows = tbody.querySelectorAll('tr');
    let visibleCount = 0;

    rows.forEach(row => {
        const text = row.innerText.toLowerCase();
        if (text.includes(query)) {
            row.style.display = '';
            visibleCount++;
        } else {
            row.style.display = 'none';
        }
    });

    if (visibleCount === 0 && query) {
        showToast(`No ${type} found matching "${query}"`, 'error');
    }
}

// Edit Student
function editStudent(studentId) {
    showToast('Edit feature coming soon', 'success');
}

// Edit Teacher
function editTeacher(teacherId) {
    showToast('Edit feature coming soon', 'success');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('student-management') || 
        window.location.pathname.includes('teacher-management')) {
        initializeManagement();
    }
});

console.log('Management.js loaded successfully');
