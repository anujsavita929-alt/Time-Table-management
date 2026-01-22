# TimeTable Generator & Management System

A modern, responsive web application for managing school timetables with role-based access for Principals, Teachers, and Students.

## 🎨 Design Features

### Color Scheme
- **Primary**: White (dominant background)
- **Accent Colors**: Red, Green, Pink, Orange
- **Forbidden**: Violet and Purple (not used)

### Responsive Design
- Mobile-first approach
- Scroll-based vertical layout (top → bottom)
- Optimized for all screen sizes (Desktop, Tablet, Mobile)

### Animations
- **Falling Clock**: Login/Signup page entrance animation
- **Walking People**: Animated silhouettes during authentication
- **3D Elements**: Floating submarine, rocket, and crown on role selection
- **Smooth Transitions**: Card hovers, button presses, page transitions
- **Counter Animations**: Dynamic number updates with visual effects

## 📁 Project Structure

```
timetable-app/
├── index.html                  # Landing page
├── role-selection.html         # Role selection with 3D elements
├── login.html                  # Login page with animations
├── signup.html                 # Signup page with counter
├── dashboard.html              # Main dashboard (role-based)
├── timetable.html              # Full timetable view
├── student-management.html     # Student management (Principal)
├── teacher-management.html     # Teacher management (Principal)
│
├── css/
│   ├── styles.css              # Main styles & layout
│   └── animations.css          # All animations
│
├── js/
│   ├── main.js                 # Utilities & navigation
│   ├── auth.js                 # Login & signup logic
│   ├── dashboard.js            # Dashboard logic
│   ├── timetable.js            # Timetable logic
│   └── management.js           # Student/Teacher management
│
└── assets/                     # Images & icons (optional)
```

## 🚀 Features

### User Roles
1. **Student**
   - View personal timetable
   - See class schedules
   - Receive notifications
   - View teacher information

2. **Teacher**
   - Create and manage class schedules
   - View assigned classes
   - Mark attendance
   - Generate class reports

3. **Principal**
   - Full system control
   - Manage students (add/edit/delete)
   - Manage teachers (add/edit/delete)
   - View analytics and reports
   - System-wide timetable management

### Authentication
- **Separate Login/Signup** for each role
- **Email validation** for account creation
- **Password strength** requirements (min 6 characters)
- **LocalStorage** for user session management
- **Role-based redirects** after login

### Dynamic Features
- **Auto-Counter**: Student and teacher count updates in real-time
- **Role-specific Dashboards**: Different UI for each user role
- **Quick Actions**: Role-based action buttons on dashboard
- **User Info Panel**: Click avatar to view profile details
- **Settings Menu**: Logout and preferences

### Timetable Management
- **Weekly Grid View**: Time slots and days displayed in table format
- **Color-coded Classes**: Different colors for different subjects
- **Schedule Preview**: Quick view of today's classes
- **Export Options**: Download as PDF or Excel (UI ready)
- **Real-time Updates**: Changes reflect immediately

### Student/Teacher Management
- **Add New Records**: Form to add students or teachers
- **Dynamic Counter**: Shows total registered users
- **Search Function**: Filter students/teachers by name, email, ID
- **Status Tracking**: Active/Inactive status for each user
- **Action Buttons**: Edit and delete functionality
- **Empty State**: Helpful message when no records exist

## 🎮 How to Use

### Starting the Application
1. Open `index.html` in a web browser
2. Click "Get Started" to begin
3. Select your role (Principal, Teacher, or Student)
4. Sign up or Login with credentials

### Demo Credentials
For testing purposes, you can create accounts through the signup page:
- Any email format (e.g., student@test.com)
- Password (minimum 6 characters)
- Role-based ID format (STU for Student, TCH for Teacher, PRIN for Principal)

### Creating Test Data
1. Sign up as Principal
2. Go to Dashboard → Student Management
3. Add test students and teachers
4. View in Timetable page

## 💾 Data Storage

### LocalStorage Structure
```javascript
{
  "users": [
    {
      "id": "unique-id",
      "fullname": "John Doe",
      "email": "john@example.com",
      "userId": "STU001",
      "password": "password123",
      "role": "student",
      "avatar": "JD",
      "createdAt": "2026-01-22T10:30:00Z"
    }
  ],
  "students": [
    {
      "id": "unique-id",
      "userId": "STU001",
      "name": "John Doe",
      "email": "john@example.com",
      "class": "Class 10A",
      "phone": "9876543210",
      "status": "Active",
      "createdAt": "2026-01-22T10:30:00Z"
    }
  ],
  "teachers": [
    {
      "id": "unique-id",
      "userId": "TCH001",
      "name": "Ms. Smith",
      "email": "smith@example.com",
      "subject": "Mathematics",
      "classes": "Class 10A, Class 10B",
      "phone": "9876543211",
      "status": "Active",
      "createdAt": "2026-01-22T10:30:00Z"
    }
  ],
  "currentUser": { /* Current logged-in user */ }
}
```

## 🎨 Customization

### Changing Colors
Edit `css/styles.css` CSS variables:
```css
:root {
    --primary-red: #E74C3C;
    --primary-green: #27AE60;
    --primary-pink: #FF69B4;
    --primary-orange: #F39C12;
}
```

### Modifying Animations
All animations are in `css/animations.css`. Examples:
- Duration: Change `2s` to desired duration
- Delay: Add `animation-delay: 0.5s;`
- Timing: Change `ease`, `linear`, `ease-in-out`

### Adjusting Spacing
Edit spacing variables in `css/styles.css`:
```css
--spacing-xs: 4px;    /* Extra small */
--spacing-sm: 8px;    /* Small */
--spacing-md: 16px;   /* Medium */
--spacing-lg: 24px;   /* Large */
--spacing-xl: 32px;   /* Extra large */
```

## 🔧 Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, Custom Properties
- **JavaScript (Vanilla)**: No frameworks required
- **LocalStorage**: Client-side data persistence
- **Responsive Design**: Mobile-first approach

## 📱 Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ✅ Features Implemented

- [x] Role-based authentication (Student, Teacher, Principal)
- [x] Separate login/signup flows
- [x] Dynamic student and teacher counters
- [x] 3D role selection elements
- [x] Falling clock and walking people animations
- [x] Dashboard with role-specific content
- [x] User profile dropdown (top-left)
- [x] Settings menu with logout
- [x] Timetable grid view
- [x] Student management
- [x] Teacher management
- [x] Search functionality
- [x] Responsive design
- [x] Dark mode ready (CSS variables)

## 🚧 Future Enhancements

- [ ] Dark mode toggle
- [ ] Email notifications
- [ ] Calendar integration
- [ ] PDF export with proper formatting
- [ ] Real-time updates using WebSockets
- [ ] User profile picture uploads
- [ ] Advanced scheduling algorithm
- [ ] Class conflict detection
- [ ] Attendance tracking
- [ ] Grade management
- [ ] Parent portal
- [ ] Mobile app (React Native)

## 📝 Notes

- All data is stored locally in browser LocalStorage
- Data persists across sessions
- Clear browser data to reset the application
- For production, integrate with a backend API
- Password is stored in plaintext for demo purposes (use hashing in production)

## 🎓 Educational Purpose

This project is designed as a complete educational example showing:
- Modern web design practices
- Responsive layout techniques
- CSS animations and transitions
- Vanilla JavaScript functionality
- LocalStorage data management
- Role-based access control
- Form validation
- UI/UX best practices

## 📄 License

This project is free to use for educational purposes.

## 🤝 Support

For questions or issues:
1. Check the README
2. Review the code comments
3. Test with sample data first
4. Clear LocalStorage if experiencing issues

---

**Built with ❤️ for Education**
**Version 1.0 - January 2026**
