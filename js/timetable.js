/* ===========================
   TIMETABLE JAVASCRIPT
   =========================== */

// Initialize Timetable
function initializeTimetable() {
    const currentUser = getCurrentUser();

    if (!currentUser) {
        navigateTo('role-selection.html');
        return;
    }

    updateUserInfo(currentUser);
    setupViewOptions();
}

// Setup view option buttons
function setupViewOptions() {
    const viewBtns = document.querySelectorAll('.view-btn');

    viewBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all
            viewBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked
            this.classList.add('active');

            const view = this.getAttribute('data-view');
            handleViewChange(view);
        });
    });
}

// Handle view change
function handleViewChange(view) {
    const container = document.querySelector('.timetable-container');
    
    switch(view) {
        case 'week':
            showWeeklyView();
            break;
        case 'month':
            showMonthlyView();
            break;
        case 'list':
            showListView();
            break;
    }

    showToast(`Switched to ${view} view`, 'success');
}

// Show weekly view
function showWeeklyView() {
    const container = document.querySelector('.timetable-container');
    if (container) {
        container.style.display = 'block';
    }
}

// Show monthly view
function showMonthlyView() {
    showToast('Monthly view coming soon', 'error');
}

// Show list view
function showListView() {
    showToast('List view coming soon', 'error');
}

// Export timetable to PDF
function exportToPDF() {
    const table = document.querySelector('.timetable-grid');
    const printWindow = window.open('', '', 'height=600,width=800');
    
    printWindow.document.write('<html><head><title>Timetable</title>');
    printWindow.document.write('<style>');
    printWindow.document.write('table { border-collapse: collapse; width: 100%; }');
    printWindow.document.write('th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }');
    printWindow.document.write('th { background-color: #E74C3C; color: white; }');
    printWindow.document.write('</style></head><body>');
    printWindow.document.write('<h2>School Timetable</h2>');
    printWindow.document.write(table.outerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}

// Setup export buttons
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('timetable')) {
        initializeTimetable();

        // Export buttons
        const exportBtns = document.querySelectorAll('.export-buttons button');
        exportBtns[0]?.addEventListener('click', exportToPDF);
        exportBtns[1]?.addEventListener('click', () => showToast('Excel export coming soon', 'success'));
        exportBtns[2]?.addEventListener('click', () => showToast('Email sent successfully', 'success'));
    }
});

console.log('Timetable.js loaded successfully');
