# 📚 TimeTable Manager - File Guide & Navigation

## 🎯 START HERE

### **First Time Users**
👉 Read: [QUICKSTART.md](QUICKSTART.md) - 5 minute quick start

### **Developers**
👉 Read: [README.md](README.md) - Complete documentation

### **Project Overview**
👉 Read: [COMPLETION_SUMMARY.md](COMPLETION_SUMMARY.md) - What's included

---

## 📂 PROJECT FILES MAP

### **HTML FILES** - Application Pages

| File | Purpose | Purpose | For |
|------|---------|---------|-----|
| **[index.html](index.html)** | Landing Page | Welcome & intro, feature showcase | All users |
| **[role-selection.html](role-selection.html)** | Role Picker | Choose Principal/Teacher/Student | New users |
| **[login.html](login.html)** | Login Page | Sign in to existing account | Returning users |
| **[signup.html](signup.html)** | Registration | Create new account | New users |
| **[dashboard.html](dashboard.html)** | Main Dashboard | Role-specific home screen | All logged-in users |
| **[timetable.html](timetable.html)** | Schedule View | View weekly timetable | All users |
| **[student-management.html](student-management.html)** | Student CRUD | Add/edit/delete students | Principals |
| **[teacher-management.html](teacher-management.html)** | Teacher CRUD | Add/edit/delete teachers | Principals |

---

### **CSS FILES** - Styling & Layout

| File | Purpose | Contains |
|------|---------|----------|
| **[css/styles.css](css/styles.css)** | Main Styles | Layout, colors, components, responsive |
| **[css/animations.css](css/animations.css)** | Animations | 30+ animation effects |
| **[css/responsive.css](css/responsive.css)** | Responsive | Mobile, tablet, desktop layouts |

---

### **JAVASCRIPT FILES** - Functionality

| File | Purpose | What It Does |
|------|---------|--------------|
| **[js/main.js](js/main.js)** | Core Utilities | Navigation, storage, helpers, utilities |
| **[js/auth.js](js/auth.js)** | Authentication | Login, signup, form validation |
| **[js/dashboard.js](js/dashboard.js)** | Dashboard Logic | Role-based UI, counters, user info |
| **[js/timetable.js](js/timetable.js)** | Timetable Logic | Schedule view, exports, interactions |
| **[js/management.js](js/management.js)** | CRUD Operations | Add, edit, delete students/teachers |

---

### **DOCUMENTATION FILES**

| File | Read This For |
|------|----------------|
| **[README.md](README.md)** | Complete project documentation |
| **[QUICKSTART.md](QUICKSTART.md)** | 5-minute quick start guide |
| **[COMPLETION_SUMMARY.md](COMPLETION_SUMMARY.md)** | Project statistics & completion status |
| **[FILE_GUIDE.md](FILE_GUIDE.md)** | This file - navigation help |

---

## 🚀 QUICK NAVIGATION

### To Open the App
```
1. Find: index.html
2. Double-click it
3. Browser opens
4. Click "Get Started"
5. Have fun! 🎉
```

### To Sign Up (Demo)
```
1. Click "Get Started" on landing page
2. Choose a role (Student/Teacher/Principal)
3. Click sign up
4. Fill the form with:
   - Email: anything@example.com
   - Password: anything123
5. Account created! ✅
```

### To View Code
```
1. HTML: Open any .html file
2. CSS: Open css/styles.css
3. JS: Open any js/*.js file
4. Use any code editor (Notepad, VS Code, etc.)
```

---

## 🎨 WHAT EACH PAGE SHOWS

### **Landing Page** (index.html)
- Welcome message
- Features overview
- "Get Started" button
- Floating background animations

### **Role Selection** (role-selection.html)
- 3 role cards: Principal, Teacher, Student
- 3D floating elements
- Click to choose role

### **Login/Signup** (login.html, signup.html)
- Form fields
- Falling clock animation
- Walking people animation
- Email validation
- Counter (signup only)

### **Dashboard** (dashboard.html)
- Role-specific layout
- User profile (top-left)
- Welcome message
- Quick actions
- Statistics counters
- Schedule preview

### **Timetable** (timetable.html)
- Weekly schedule grid
- Colored subjects
- Time slots
- Export buttons
- Subject legend

### **Student Mgmt** (student-management.html)
- Student statistics
- Add student form
- Student table
- Search function
- Delete button

### **Teacher Mgmt** (teacher-management.html)
- Teacher statistics
- Add teacher form
- Teacher table
- Search function
- Delete button

---

## 💡 KEY FEATURES IN EACH FILE

### **HTML** - Page Structure
```html
<!-- Header with navigation -->
<!-- Main content area -->
<!-- Forms with inputs -->
<!-- Tables with data -->
<!-- Buttons for actions -->
```

### **CSS** - Styling
```css
/* Colors defined as variables */
/* Layouts with Flexbox/Grid */
/* Responsive media queries */
/* Animations and transitions */
```

### **JavaScript** - Functionality
```javascript
// Navigation between pages
// Form submission handling
// Data storage and retrieval
// Animations and effects
// User interactions
```

---

## 🔍 HOW TO FIND THINGS

### Find a Color
👉 Search in `css/styles.css` for `--primary-red`, `--primary-green`, etc.

### Find an Animation
👉 Search in `css/animations.css` for `@keyframes` followed by animation name

### Find a Function
👉 Search in `js/*.js` files for `function functionName()`

### Find a Form
👉 Search in HTML files for `<form>` or `<input>`

### Find a Button
👉 Search for `class="btn"` in HTML files

### Find an Animation Effect
👉 Look at the classes with `animation:` in CSS files

---

## 📱 RESPONSIVE DESIGN

### Desktop (1200px+)
- Full layout with all columns
- Large fonts and spacing
- Expanded navigation

### Tablet (768px - 1199px)
- Adjusted grid layouts
- Medium fonts and spacing
- Touch-optimized buttons

### Mobile (480px - 767px)
- Single column layout
- Compact spacing
- Simplified forms

### Small Mobile (< 480px)
- Minimal layout
- Reduced font sizes
- Essential features only

---

## 🎬 ANIMATION EXAMPLES

### In HTML Pages
```html
<!-- Falling Clock in login.html -->
<div class="falling-clock"> ... </div>

<!-- Walking People in signup.html -->
<div class="people-walking"> ... </div>

<!-- 3D Elements in role-selection.html -->
<div class="floating-crown"></div>
```

### In CSS
```css
/* Animation definition in animations.css */
@keyframes fall { ... }

/* Applied to element */
.falling-clock {
    animation: fall 3s ease-in-out infinite;
}
```

---

## 🗄️ DATA STORAGE

All data stored in browser's LocalStorage:
- Users list
- Students list
- Teachers list
- Current logged-in user

### View in Developer Tools
```
Press F12 → Application → LocalStorage
```

### Clear All Data
```javascript
// In browser console (F12 → Console):
localStorage.clear()
```

---

## ✅ TESTING CHECKLIST

### Basic Testing
- [ ] Open index.html - page loads
- [ ] Click "Get Started" - goes to role selection
- [ ] Click a role - goes to signup
- [ ] Fill signup form - account created
- [ ] Login with email - redirects to dashboard
- [ ] Click user avatar - profile appears
- [ ] Click settings - logout option shows
- [ ] Click logout - goes back to landing

### Advanced Testing
- [ ] Sign up multiple users
- [ ] Add students/teachers
- [ ] Search for records
- [ ] Delete a record
- [ ] Try form validation
- [ ] Check mobile view (F12)
- [ ] Test animations
- [ ] View in different browsers

---

## 🛠️ CUSTOMIZATION GUIDE

### Change Colors
File: `css/styles.css`
```css
:root {
    --primary-red: #E74C3C;      /* Change this */
    --primary-green: #27AE60;    /* Change this */
}
```

### Change Company Name
Files: All HTML files
```html
<h1>TimeTable Pro</h1>  <!-- Change to your name -->
```

### Change Animation Speed
File: `css/animations.css`
```css
@keyframes fall {
    /* Change 3s to 1s for faster */
}
```

### Add New Page
1. Copy `dashboard.html`
2. Rename to `newpage.html`
3. Edit content
4. Link from other pages using `onclick="navigateTo('newpage.html')"`

---

## 🐛 TROUBLESHOOTING

### Page Won't Load
- Check file names are correct
- Make sure all files are in same folder
- Try different browser

### Data Not Saving
- Check if LocalStorage is enabled
- Try private/incognito mode
- Clear cache (Ctrl+Shift+Delete)

### Animations Not Working
- Refresh page (Ctrl+F5)
- Update browser
- Check CSS files are linked

### Mobile Layout Broken
- Use F12 → Device toolbar
- Try rotating screen
- Zoom out (Ctrl+Minus)

---

## 📞 QUICK REFERENCE

### File Locations
```
index.html ...................... Landing page
role-selection.html ............. Role selection
login.html ....................... Login page
signup.html ...................... Signup page
dashboard.html ................... Main dashboard
timetable.html ................... Schedule view
student-management.html ......... Student CRUD
teacher-management.html ......... Teacher CRUD

css/styles.css ................... Main styles
css/animations.css ............... Animations
css/responsive.css ............... Mobile layout

js/main.js ....................... Utilities
js/auth.js ....................... Authentication
js/dashboard.js .................. Dashboard logic
js/timetable.js .................. Timetable logic
js/management.js ................. CRUD operations
```

### Common Tasks
| Task | File | Location |
|------|------|----------|
| Change color | css/styles.css | --primary-red |
| Add animation | css/animations.css | @keyframes |
| Change text | HTML files | Search text |
| Add function | js/main.js | Bottom of file |
| Fix form | HTML files | <form> section |

---

## 🎓 LEARNING PATH

### Beginner (Start Here)
1. Read QUICKSTART.md
2. Open index.html
3. Click around the app
4. View in browser DevTools (F12)

### Intermediate
1. Read README.md
2. Open HTML files in editor
3. Study CSS in styles.css
4. Check JavaScript in js/main.js

### Advanced
1. Read COMPLETION_SUMMARY.md
2. Study all JavaScript files
3. Understand data flow
4. Customize and extend

---

## 🚀 NEXT STEPS

### To Learn
- [ ] Study HTML structure
- [ ] Understand CSS layout
- [ ] Learn JavaScript functions
- [ ] Practice animations

### To Customize
- [ ] Change colors
- [ ] Add new pages
- [ ] Modify forms
- [ ] Adjust animations

### To Extend
- [ ] Add new features
- [ ] Connect to backend
- [ ] Add database
- [ ] Deploy online

---

## 📚 ALL DOCUMENTATION

| Document | What to Read |
|----------|--------------|
| **QUICKSTART.md** | Start here - 5 min quick start |
| **README.md** | Complete feature documentation |
| **COMPLETION_SUMMARY.md** | Project statistics & details |
| **FILE_GUIDE.md** | This file - navigation help |

---

## 🎯 REMEMBER

✅ Everything is in vanilla HTML, CSS, JavaScript
✅ No frameworks or dependencies needed
✅ All data saved locally in browser
✅ Fully responsive design
✅ 30+ smooth animations
✅ Complete source code

---

## 🎉 YOU'RE ALL SET!

1. Open `index.html`
2. Have fun!
3. Share your work!
4. Keep learning!

---

**Happy coding! 🚀**

---

*Last Updated: January 22, 2026*
*Version: 1.0*
