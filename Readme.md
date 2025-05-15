Personal Portfolio Website

Overview:
This is a multi-page personal portfolio website built to showcase web development skills, projects, and provide contact and survey forms. It follows modern web development best practices, including semantic HTML5, responsive design, accessibility, and dynamic interactivity using JavaScript.

Tools Used:
-HTML5: Semantic markup and structure.
-CSS: External, internal, and inline styling for layouts, colors, print, and responsiveness.
-JavaScript: DOM manipulation, event handling, form validation, theme toggling, and dynamic content.
-Code editor: Visual Studio Code (recommended)
-Browser developer tools for testing and debugging(Web Chrome).

Key Features Implemented
-Multi-page structure(using links and navigation): Homepage, About Me, Projects, Contact Form, and Survey pages.
-Semantic HTML5 tags for better accessibility.
-Responsive design: Layout adapts to desktop and mobile screens.
-Navigation bars: Horizontal navigation with clear focus and hover states.
-Image map: Clickable technology logos linking to official sites.
-Iframe: Embedded YouTube video on the homepage.
-2-column layout: on About page and 3-column layout on Projects page using CSS Grid & Flexbox.
-Dark/Light mode toggle: Enables user to switch themes with preferences saved in localStorage.
-Form validations:
  -Contact form with regex validation for email and phone numbers.
  -Survey form with required radio input and checkbox inputs.
-Dynamic project details toggle on the portfolio page with keyboard accessibility.
-Print-friendly CSS for potential resume content.
-Accessibility best practices: aria attributes, alt text, keyboard navigable components.
-Character entities used where needed (e.g., ©).
  
Challenges Faced and Solutions
-HTML Syntax Issues: Initially,placing a link from youtube directly didnot work and the solution i got was to embedd the video from online.
-Form Validations: Implementing validations and user-friendly error messages required testing various input formats. Added detailed feedback and prevented form submission unless validations pass.The solution was I researching regular expressions for validating email and phone number formats.
-Responsive Layouts: Achieving consistent column layouts across devices was challenging .Solution is that I utilized CSS Grid for the Projects page to create a responsive 3-column layout that adapts to different screen sizes.For the About page, I used Flexbox to create a 2-column layout that adjusts based on the viewport width.
-Theme Toggle State Persistence: Managing multiple toggle buttons and persisting theme state across pages was then solved by creating a function to set the theme based on user selection and stored the preference in localStorage. On page load, I checked localStorage for the saved theme and applied it, ensuring consistency across all pages. and also added event listeners to all theme toggle buttons to allow users to switch themes easily.


Live Demo
[Add your deployed site link here if available]

---


Sharon Kaaya
