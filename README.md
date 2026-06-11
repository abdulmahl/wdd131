# 🌲 TrailWise – Pacific Northwest Hiking Hub

A responsive, multi-page website for outdoor enthusiasts to discover trails, join a hiking community, and access curated route information.

> School project – all styling is custom CSS, with no frameworks or utility libraries used.

---

## 📁 Project Structure

```text
project/
├── index.html               # Homepage with hero, features, visitor counter
├── trails.html              # Dynamic trail gallery with filter controls
├── join.html                # Registration form (submits to thankyou.html)
├── thankyou.html            # Acknowledgment page displaying submitted data
├── references.html          # Attribution and source references
├── styles/
│   ├── project-base.css     # Base styles, reset, typography, components
│   └── project-large.css    # Responsive layout overrides (≥768px, ≥1080px)
├── scripts/
│   ├── project.js           # Shared functionality:
│   │                         mobile navigation, visitor analytics,
│   │                         trail filtering, footer dates
│   └── thankyou.js          # IIFE to read URL parameters and
│                             display submitted user data
└── README.md                # Project documentation
```

---

## 🚀 Features

### Mobile-Friendly Navigation
- Hamburger menu for smaller screens
- Responsive navigation experience

### Trail Gallery
- Dynamic trail filtering using JavaScript
- Filter by:
  - Dog-friendliness
  - Difficulty level

### Visitor Analytics
- Tracks site visits using `localStorage`
- Displays returning visitor information

### Registration & Acknowledgment
- Join form submits data via GET request
- Thank-you page displays submitted information
- No backend or database required

### Responsive Design
- Built with CSS Grid and Flexbox
- Optimized for:
  - Mobile
  - Tablet
  - Desktop

### Accessibility
- Semantic HTML structure
- ARIA labels where appropriate

---

## 🛠️ Technologies Used

### HTML5
- Semantic markup
- Accessible page structure

### CSS3
- Custom properties (CSS variables)
- CSS Grid
- Flexbox
- Media queries
- No Bootstrap, Tailwind, or other frameworks

### JavaScript (ES6)
- DOM manipulation
- Event handling
- `localStorage`
- `URLSearchParams`

### External Resources
- **Fonts:** Google Fonts
  - Montserrat (headings)
  - Lato (body text)
- **Images:** Lorem Picsum placeholders
- **Icons:** Unicode emojis and system fonts

---

## 🧪 How to Run

1. Clone or download the project folder.
2. Open the project using:
   - VS Code Live Server
   - Python `http.server`
   - Any local web server
   - Or directly open `index.html`
3. Navigate between pages using the site header.
4. Visit **Explore Trails** and test the filter controls.
5. Visit **Join Hub**, complete the form, and submit.
6. Review the submitted information on the **Thank You** page.

### Note

The thank-you page reads user data from URL parameters such as:

```text
?fullname=John+Doe&email=john@example.com
```

No sensitive information is stored on a server or in a database.

---

## 📝 Course Compliance

- ✅ No CSS frameworks (Bootstrap, Tailwind, Foundation, etc.)
- ✅ Vanilla JavaScript only
- ✅ Responsive on mobile, tablet, and desktop
- ✅ Original custom class names
- ✅ Semantic HTML and accessibility considerations

---

## 🙏 Attributions

### Fonts
- Google Fonts

### Images
- Lorem Picsum

### Icons & Emojis
- Unicode characters and system fonts

---

## 👨‍💻 Author

**Mduduzi Abdul Mahlangu**

**Course:** WDD 131 – Dynamic Web Fundamentals  
**Year:** 2026

For additional sources and acknowledgments, see the `references.html` page.
