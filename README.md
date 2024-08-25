## Introduction
This project showcases my ability to dynamically render a restaurant homepage entirely using JavaScript for DOM manipulation. 
The website's content is generated programmatically, demonstrating the use of modular JavaScript, event-driven programming, and Webpack bundling.

## Key Features
- **Dynamic Rendering:** The entire website content, except for styling and the base HTML skeleton, is created using JavaScript. This includes adding images, headlines, and page content.
- **Tabbed Browsing:** Users can switch between different sections (Home, Menu, Contact) seamlessly. Each tab’s content is generated dynamically and switched through event listeners.
- **Modular Design:** Each tab’s content is encapsulated in its own module, promoting clean, maintainable code and separation of concerns.
- **Webpack Integration:** The project is bundled using Webpack, allowing for easy dependency management, code modularization, and optimized build outputs.
- **GitHub Pages Deployment:** The application is deployed using GitHub Pages, utilizing Webpack’s build process to serve the project from a dedicated branch.

## What I Learned
- Advanced DOM manipulation using JavaScript.
- Modular design and code organization in a larger project.
- Setting up and configuring Webpack for bundling JavaScript modules.
- How npm is used to easily add and track packages.
- Deploying a project to GitHub Pages, including handling the intricacies of serving from the `dist/` directory.

## Live Demo:
Project Link: [Hama's Restaurant](https://hamacodes.github.io/restaurant-page/)

## Project Structure
```
restaurant-homepage/
├── dist/               # Bundled output files
├── node_modules/       # Project dependencies managed by npm
├── src/                # Source files
│   ├── home.js         # Home tab module
│   ├── menu.js         # Menu tab module
│   ├── contact.js      # Contact tab module
│   ├── index.js        # Main JavaScript file
│   └── template.html   # Base HTML structure
├── .gitignore          # Files and directories to be ignored by git
├── package.json        # Project metadata and dependencies
└── webpack.config.js   # Webpack configuration
```

## Contact
Feel free to reach out if you have any questions about the project!  
**Hama Pashazadeh**  
[LinkedIn](https://linkedin.com/in/pashazad)  
[Email](mailto:pashazad@msu.edu)
