# Festival Landing Page

## Modern CSS Techniques Used

This project leverages a range of modern CSS techniques to create a visually appealing, accessible, and maintainable festival website. Below are some of the key approaches and features:

> **Note:** Some of these features may not be fully supported in older browsers. For the best experience, use a modern browser that supports the latest CSS standards.

### 1. CSS Custom Properties (Variables)

- **Semantic and palette variables** are defined in the `:root` selector for colors, typography, and spacing.
- Variables like `--background-main`, `--text-high-contrast`, and `--tag-pop` enable easy theming and consistent design.
- Responsive font sizes and spacing are managed with variables and media queries.

### 2. CSS Layers (`@layer`)

- The stylesheet is organized using `@layer` to separate reset, base, layout, components, and utilities.
- This improves maintainability and helps manage specificity.

### 3. CSS Nesting

- Selectors are nested for clarity and to reduce repetition, especially in component and layout rules.
- Example: `.primary-navigation ul { ... }` and nested media queries.

### 4. Media Queries and Responsive Design

- Responsive breakpoints are used for font sizes, grid layouts, and navigation.
- The layout adapts to different screen sizes using modern CSS grid and flexbox.

### 5. CSS Grid and Flexbox

- **Grid** is used for complex layouts like `.equal-columns` and `.faq-bento-grid`.
- **Flexbox** is used for navigation, tag lists, and card layouts.

### 6. Accessibility Enhancements

- Visually hidden utility classes (e.g., `.visually-hidden`) for screen readers.
- High-contrast color variables and accessible font sizes.
- ARIA attributes and descriptive alt text in HTML.

### 7. Utility Classes

- Utility classes for text alignment, font size, background color, and more.
- Encourages reuse and rapid prototyping.

### 8. Modern Reset and Box Sizing

- A modern CSS reset is applied using `@layer reset`.
- Most elements use `box-sizing: border-box` for predictable sizing.
- `box-sizing: content-box` is used in some places (such as the `.wrapper` class) to match specific layout needs.

### 9. View Transitions and Smooth Scrolling

- Uses `@view-transition` and `scroll-behavior: smooth` for enhanced navigation experience.

### 10. Theming for Tags

- Tag colors are managed with semantic variables (e.g., `--tag-pop`, `--tag-electronic`) for easy updates and consistent theming.

---

This approach ensures the site is scalable, maintainable, and ready for future enhancements using the latest CSS standards
