# Parent Training Platform

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Status](https://img.shields.io/badge/status-completed-brightgreen.svg)

A comprehensive front-end platform designed for parents to manage children's educational training, track learning progress, and discover educational resources. Built with modern web technologies for intuitive navigation and responsive experience.


## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technical Implementation](#technical-implementation)
- [Installation](#installation)
- [Usage Guide](#usage-guide)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)


## Project Overview
### Introduction
The Parent Training Platform is a mobile-first web application that enables parents to:
- Browse and discover educational institutions and courses
- Track children's learning progress across multiple subjects
- Manage course collections and complete purchases
- Maintain personal profiles and account settings

### Key Objectives
- Provide an intuitive interface for parents to engage with educational content
- Visualize learning metrics to support data-driven decisions
- Simplify the course discovery and enrollment process
- Ensure seamless experience across all devices


## Features
### Core Functional Modules
#### 1. Homepage
- [x] Latest news from training institutions
- [x] Education policy updates
- [x] Featured course recommendations
- [x] Search functionality for courses and institutions

#### 2. Learning Progress Dashboard
- [x] Visual progress bars for each subject
- [x] Multi-child profile management
- [x] Course completion tracking
- [x] Upcoming learning milestones

#### 3. Course Management
- [x] Course collection and wishlist
- [x] Price comparison and discount tracking
- [x] One-click purchase functionality
- [x] Order history and transaction records

#### 4. Personal Center
- [x] Profile management and contact information
- [x] Membership status and renewal
- [x] Notification center
- [x] Account security settings

### Interaction Design
- **Bottom Navigation**: Intuitive 4-tab navigation with visual indicators for active state
- **Micro-animations**:
  - Card hover effects with elevation changes
  - Progress bar loading animations
  - Page transition fades
- **Responsive Layout**: Adaptive design for mobile, tablet, and desktop screens


## Technical Implementation
### Front-end Stack
- **HTML5**: Semantic markup for accessibility and SEO
- **Tailwind CSS v3**: Utility-first CSS framework for rapid UI development
- **JavaScript**: DOM manipulation and interactive functionality
- **Font Awesome**: Iconography for intuitive UI elements

### Key Technical Features
#### Tailwind Configuration
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#165DFF',     // Deep blue (primary brand color)
        secondary: '#4080FF',   // Medium blue (secondary brand color)
        accent: '#7B61FF',      // Purple (accent color for highlights)
        success: '#00B42A',     // Green (for success indicators)
        warning: '#FF7D00',     // Orange (for warnings)
        danger: '#F53F3F',      // Red (for errors)
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
      }
    }
  }
}
```

#### Responsive Design
- Mobile-first approach with breakpoints:
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px
- Grid and flexbox layouts for dynamic content alignment
- Image handling with `object-cover` for consistent aspect ratios


## Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repo/parent-training-platform.git
   ```

2. **Navigate to project directory**:
   ```bash
   cd parent-training-platform
   ```

3. **Open in browser**:
   - Simply open `index.html` in your preferred web browser
   - No additional dependencies or build steps required


## Usage Guide
### Navigation
- Use the **bottom navigation bar** to switch between pages:
  - **Home**: Access latest news and recommendations
  - **Progress**: Track learning metrics
  - **Cart**: Manage course collections
  - **Profile**: Access personal settings

### Key Operations
#### Search for Courses
1. Enter keywords in the top search bar
2. Browse results and click "View Details" for more information

#### Track Learning Progress
1. Select child profile from dropdown on Progress page
2. View subject-wise progress bars and completion status
3. Click on individual courses for detailed learning history

#### Purchase Courses
1. Add desired courses to cart
2. Review selected courses and total price
3. Click "Buy Now" to complete transaction

#### Manage Account
1. Access Profile page
2. Update personal information, contact details, or security settings
3. Logout using the "Log out" button at the bottom of the profile page


## Customization
### Theme Modification
To adjust the color scheme, modify the `colors` section in the Tailwind configuration:
```javascript
// Update theme colors in tailwind.config.js
colors: {
  primary: '#NEW_PRIMARY_COLOR',
  secondary: '#NEW_SECONDARY_COLOR',
  // ... other colors
}
```

### Layout Adjustments
Modify responsive classes in HTML to change layout behavior:
```html
<!-- Example: Change grid columns for different screen sizes -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <!-- Content -->
</div>
```


## Contributing
We welcome contributions! To contribute:

1. **Fork the repository**
2. **Create a new branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit your changes**:
   ```bash
   git commit -m "Add your feature description"
   ```
4. **Push to your branch**:
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open a Pull Request** against the `main` branch


## License
This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.


## Acknowledgments
- [Tailwind CSS](https://tailwindcss.com/)
- [Font Awesome](https://fontawesome.com/)
- [Picsum Photos](https://picsum.photos/) for placeholder images



