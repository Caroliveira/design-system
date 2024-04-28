# Guidelines

This document outlines the standards and practices we follow in this project. It serves as an introduction to our working methods for new collaborators and as a reference for established patterns and architectural designs.

## Project structure

### Folder

- **docs:** Documentation focused on developers, providing insights and explanations about the project.
- **lib:** The source folder for all components related to the Design System.
  - **components:** Individual components of the design system.
  - **context:** Contexts created using `React.createContext()`, along with their provider files.
  - **stories:** Documentation related to Storybook.
  - **utils:** Shared functions, constants, and types used across different files.
- **public:** Used for static assets that are served unchanged.
- **scripts:** Scripts written to automate routine tasks.
- **src:** Currently empty, this will be populated with examples demonstrating how to use the library.

### Components

Each component directory should include the following files:

```javascript
/ComponentName
  /index.tsx                  // The actual component
  /ComponentName.module.css   // Component-specific css
  /ComponentName.stories.tsx  // Storybook documentation for the component
  /ComponentName.utils.ts     // (Optional) Logic or constants extracted from the component
```

## Pattern

### CSS Patterns

- **BEM Methodology:** We use the BEM naming convention, which includes `.block__element--modifier` for CSS classes.
- **CamelCase:** When a class name includes two combined words, it should be typed in camelCase.
- **Usage in TSX files:**
  - Single class: `className={styles.componentName}`
  - Two classes: `` className={`${styles['componentName--one']} ${styles['componentName--two']}`} ``
  - More than two classes:
    ```javascript
    const componentNameClass = [
      styles.componentName,
      styles["componentName--one"],
      styles["componentName--two"],
      styles["componentName--three"],
      className,
    ].join(" ");
    ```
