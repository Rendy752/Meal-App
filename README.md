# MealApp
<p align="center"><a href="https://rendyp-meal.vercel.app" target="_blank"><img src="src/images/logo.png" width="400" alt="MealApp Logo"></a></p>

## Project Description
MealApp is a web application built entirely with **vanilla JavaScript**, leveraging the [TheMealDB API](https://www.themealdb.com/api.php) to provide users with a rich experience of exploring meals from around the world. The app allows users to browse meals, filter them by categories or ingredients, view detailed recipes, and watch instructional videos. It features a responsive design, modern UI with Materialize CSS, and a modular architecture using Web Components.

The project is designed to be lightweight, performant, and developer-friendly, with a focus on clean code and modern JavaScript practices. It uses Webpack for bundling, Babel for transpilation, and ESLint for code quality assurance.

## Features
- **Meal Exploration**: Browse a variety of meals with a random meal display on the homepage.
- **Search Functionality**: Search for meals by keyword using a sleek search bar.
- **Category Filtering**: Explore meals categorized by cuisine types (e.g., Italian, Mexican).
- **Ingredient-Based Search**: View meals based on specific ingredients.
- **Detailed Meal View**: Access detailed meal information, including ingredients, instructions, and embedded YouTube videos.
- **Responsive Design**: Fully responsive UI, optimized for mobile, tablet, and desktop devices using Materialize CSS.
- **Interactive UI**: Features collapsible lists, modals, sliders, and tooltips for an engaging user experience.
- **Loading & Error Handling**: Displays loading animations and user-friendly error messages during API calls.

## Screenshot
![MealApp Screenshot](src/images/screenshot.png)
*Caption: The MealApp homepage showcasing a random meal with search and navigation options.*

## Tech Stack
- **Frontend**: Vanilla JavaScript, Web Components
- **Styling**: Materialize CSS, Material Icons
- **Build Tools**: Webpack, Babel, Terser (for minification)
- **Linting**: ESLint
- **API**: TheMealDB API
- **Dependencies**:
  - `materialize-css`: For responsive UI components
  - `material-icons`: For iconography
  - Webpack plugins: `html-webpack-plugin`, `clean-webpack-plugin`, `terser-webpack-plugin`
  - Loaders: `css-loader`, `style-loader`, `file-loader`, `babel-loader`

## Project Structure
```
mealapp/
├── dist/                    # Output directory for bundled files
├── src/                     # Source code
│   ├── images/              # Static assets (e.g., logo.png, screenshot.png)
│   │   └── logo.png         # Application logo
│   ├── script/              # Main JavaScript logic
│   │   └── component/       # Web Components (nav-bar, meal-list, etc.)
│   │   └── data/            # API data fetching logic
│   │   └── view/            # View logic (e.g., main.js)
│   ├── style/               # CSS styles
│   │   └── style.css        # Main stylesheet
│   └── index.html           # Entry HTML file
├── .eslintrc.json           # ESLint configuration
├── .gitignore               # Git ignore file
├── .gitattributes           # Git attributes file
├── package.json             # Project metadata and scripts
├── package-lock.json        # Lock file for dependencies
└── README.md                # Project documentation
```

## Installation
To set up the project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/mealapp.git
   cd mealapp
   ```

2. **Install Dependencies**:
   Ensure you have [Node.js](https://nodejs.org/) installed, then run:
   ```bash
   npm install
   ```

3. **Run Development Server**:
   Start the development server with hot reloading:
   ```bash
   npm run start-dev
   ```
   Open `http://localhost:8080` in your browser.

4. **Build for Production**:
   Generate an optimized production build:
   ```bash
   npm run build
   ```
   The output will be in the `dist/` directory.

## Usage
- **Home Page**: Displays a random meal on load. Use the search bar to find specific meals by name.
- **Navigation**: Use the top navbar or floating action button to switch between *Meals*, *Categories*, and *Ingredients* sections.
- **Meal Details**: Click on a meal to view its details in a modal, including ingredients, instructions, and a YouTube video (if available).
- **Categories**: Browse meals by category, with collapsible sections showing category descriptions and related meals.
- **Ingredients**: Explore ingredients and view meals that use them (note: Ingredients section is under maintenance).

## Development
- **Adding New Features**: Create new Web Components in the `src/script/component/` directory and import them in `src/script/view/main.js` or relevant files.
- **API Integration**: Extend `MealData`, `CategoriesData`, or `IngredientsData` in `src/script/data/` for additional API endpoints.
- **Styling**: Update `src/style/style.css` for custom styles, ensuring compatibility with Materialize CSS.
- **Linting**: Run `npm run lint` to check code quality with ESLint.

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## License
This project is licensed under the [ISC License](LICENSE).

## Author
**Rendy Pratama**

## Acknowledgments
- [TheMealDB](https://www.themealdb.com/) for providing the free meal API.
- [Materialize CSS](https://materializecss.com/) for the responsive UI framework.
- [Webpack](https://webpack.js.org/) for bundling and build optimization.
