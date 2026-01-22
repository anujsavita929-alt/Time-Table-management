# Quick Start Guide - TimeTable Manager

## 🚀 Getting Started in 5 Minutes

### Step 1: Open the Application
1. Navigate to the project folder: `c:\CHEENU2\2nd sem\MP2\23jan`
2. Double-click **`index.html`** to open in your browser
3. You should see the landing page with "TimeTable Pro" header

### Step 2: Navigate Through the App
```
Landing Page (index.html)
        ↓
Get Started Button
        ↓
Role Selection (role-selection.html)
        ↓
Choose: Principal / Teacher / Student
        ↓
Sign Up or Login
        ↓
Dashboard (dashboard.html)
```

## 📝 Demo Walkthrough

### **Try as a Student (Fastest)**

1. **On Role Selection Page**
   - Click the "Student" card (green with cap icon)

2. **On Sign Up Page**
   - Full Name: `John Doe`
   - Email: `john@example.com`
   - ID Number: `STU001`
   - Password: `password123`
   - Confirm Password: `password123`
   - Watch the counter increase
   - Click "Create Account"

3. **On Dashboard**
   - See your profile (JD avatar, top-left)
   - View today's schedule
   - Click "View Full Timetable"

4. **On Timetable Page**
   - See weekly schedule grid
   - Colors show different subjects
   - Click "Download PDF" (demo button)

5. **Logout**
   - Click avatar (top-left) → Settings ⚙️ → Logout

---

### **Try as a Principal (Full Features)**

1. **Sign Up as Principal**
   - Role: Principal
   - Email: `principal@school.com`
   - ID: `PRIN001`

2. **On Principal Dashboard**
   - See Student/Teacher Counters
   - Click "Student Management" card

3. **Add Your First Student**
   - Click "+ Add New Student"
   - Fill the form:
     ```
     Name: Jane Smith
     Student ID: STU002
     Email: jane@school.com
     Class: Class 10A
     Phone: 9876543210
     Status: Active
     ```
   - Watch the counter update from 0 → 1
   - Click "Add Student"

4. **Add a Teacher**
   - Go back → Click "Teacher Management"
   - Click "+ Add New Teacher"
   - Fill the form:
     ```
     Name: Mr. Johnson
     Teacher ID: TCH001
     Email: johnson@school.com
     Subject: Mathematics
     Classes: Class 10A, Class 10B
     ```
   - Watch the counter increase

5. **Search Students/Teachers**
   - Type in the search box
   - See real-time filtering

6. **Delete Records**
   - Click the 🗑 icon next to any entry
   - Confirm deletion

---

### **Try as a Teacher**

1. **Sign Up as Teacher**
   - Role: Teacher
   - Email: `teacher@school.com`
   - ID: `TCH002`

2. **On Teacher Dashboard**
   - See quick actions specific to teachers
   - Click "My Schedule" to view timetable
   - View assigned classes

---

## 🎯 Key Features to Try

### ✅ Animations
- **Landing Page**: Watch floating shapes move
- **Login Page**: See falling clock animation (Supercell style)
- **Role Selection**: Hover over cards for 3D effects
- **Dashboard**: Notice smooth transitions between sections

### ✅ Dynamic Counter
- Sign up multiple students
- Watch total count increase with celebration animation
- See real-time updates on principal dashboard

### ✅ Form Validation
Try these to see validation:
- Leave fields empty and click submit
- Enter invalid email
- Mismatched passwords
- Already registered email

### ✅ User Profiles
- Click avatar in header (top-left)
- See profile information panel
- Click settings ⚙️ for more options

### ✅ Responsive Design
- Open on mobile (use browser DevTools: F12 → Responsive)
- See layout adapt beautifully
- Touch-friendly buttons and forms

---

## 🔐 Demo Data Management

### View All Data
Open browser DevTools (F12) → Console → Type:
```javascript
JSON.parse(localStorage.getItem('users'))
JSON.parse(localStorage.getItem('students'))
JSON.parse(localStorage.getItem('teachers'))
```

### Clear All Data
In Console, type:
```javascript
localStorage.clear()
```
Then refresh the page

### Export Data
Go to Student/Teacher Management → Click "Download CSV" (feature ready)

---

## 🎨 Customization Quick Tips

### Change Colors
Edit `css/styles.css` line ~10:
```css
--primary-red: #E74C3C;      /* Change this */
--primary-green: #27AE60;    /* Or this */
```

### Speed Up Animations
Edit `css/animations.css`, change duration:
```css
@keyframes fall {
    /* Change 3s to 1s for faster */
    0% { transform: translateY(-100px); }
}
```

### Add More Classes
Edit `timetable.html` line ~120:
```html
<option>Class 10A</option>
<option>Class 10B</option>
<option>NEW CLASS HERE</option>  <!-- Add this -->
```

---

## 🐛 Troubleshooting

### **"Page not loading"**
- Make sure all files are in the same folder
- Try opening with a different browser
- Check file names are exact (case-sensitive)

### **"Data not saving"**
- Check if LocalStorage is enabled
- Try a different browser (sometimes private mode blocks it)
- Check developer console for errors (F12)

### **"Animations not showing"**
- Refresh the page (Ctrl+F5)
- Clear browser cache
- Update your browser

### **"Forgot password?"**
- This is a demo - clear localStorage and start fresh
- Or create a new account with different email

---

## 📱 Test Across Devices

### Desktop
- Open normally in browser

### Mobile
- Press F12 → Click device icon → Choose device
- Or use real phone: `http://yourip:5500`

### Tablet
- DevTools → Device: iPad

---

## 🎓 Learning Resources

### HTML Files to Understand
1. `index.html` - Landing page structure
2. `dashboard.html` - Main layout
3. `signup.html` - Form example

### CSS to Learn From
1. `css/styles.css` - All layouts and colors
2. `css/animations.css` - All animations explained
3. `css/responsive.css` - Mobile adaptations

### JavaScript to Study
1. `js/main.js` - Utilities and helpers
2. `js/auth.js` - Login logic and validation
3. `js/dashboard.js` - Data loading
4. `js/management.js` - CRUD operations

---

## ⚡ Next Steps

1. **Customize Colors**
   - Change brand colors in CSS variables

2. **Add More Pages**
   - Copy dashboard.html structure
   - Add new features

3. **Connect to Backend**
   - Replace localStorage with API calls
   - Add real database

4. **Add More Features**
   - Email notifications
   - PDF generation
   - Real-time sync

---

## 💡 Pro Tips

✅ Always check console (F12) for errors
✅ Test on mobile before sharing
✅ Clear data if something seems broken
✅ Keep file structure organized
✅ Comment your code changes
✅ Test all form validations
✅ Try different screen sizes

---

## 📞 Quick Reference

| Page | URL | Purpose |
|------|-----|---------|
| Landing | index.html | Welcome & intro |
| Role Select | role-selection.html | Choose user type |
| Login | login.html | Sign in |
| Signup | signup.html | Create account |
| Dashboard | dashboard.html | Main interface |
| Timetable | timetable.html | View schedule |
| Student Mgmt | student-management.html | Add/edit students |
| Teacher Mgmt | teacher-management.html | Add/edit teachers |

---

## 🎉 You're Ready!

Start by signing up as a **Principal** and:
1. Add 2-3 students
2. Add 2-3 teachers
3. View the timetable
4. Test the search feature
5. Try deleting records

Enjoy exploring! 🚀

---

**Questions?** Check the main README.md for more details.
