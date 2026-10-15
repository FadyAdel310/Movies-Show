# 🎬 Movies Show

A responsive movie discovery web application built with React that allows users to explore movies, search for titles, view movie details, and discover popular, trending, top-rated, and upcoming releases.

**[Live Demo](https://fadyadel310.github.io/Movies-Show/)** · **[Source Code](https://github.com/FadyAdel310/Movies-Show)**

## 📌 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [API Integration](#-api-integration)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Available Scripts](#-available-scripts)
- [Deployment](#-deployment)
- [Future Improvements](#-future-improvements)
- [Author](#-author)

## 🌟 Overview

Movies Show is a React-based web application designed to provide an interactive movie discovery experience. It retrieves movie information from **The Movie Database (TMDB) API** and organizes titles into different categories to help users discover movies and explore their details.

The application uses React Hooks and Context API to manage application state and share data between components. React Router enables navigation between the home page, search results, and individual movie pages.

The project also supports English and Arabic interfaces, along with dark and light theme options.

## ✨ Features

- **Movie Discovery:** Explore popular, trending, top-rated, and upcoming movies.
- **Dynamic Featured Movie:** Display a randomly selected trending movie in the featured section.
- **Movie Search:** Search for movies by title and view matching results.
- **Movie Details:** Navigate to individual movie pages using movie IDs.
- **Pagination:** Navigate through multiple pages of movie listings and search results.
- **Multilingual Interface:** Switch between English and Arabic.
- **Theme Switching:** Toggle between dark and light themes.
- **API Integration:** Retrieve movie information dynamically from TMDB.
- **Responsive Interface:** Use Bootstrap-based styling and responsive layouts.
- **Interactive UI:** Enhance the user experience with animated interface elements and Font Awesome icons.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Application structure |
| CSS3 | Styling and layouts |
| JavaScript (ES6+) | Application logic and interactivity |
| React 18 | Component-based user interface |
| React Hooks | State management and side effects |
| Context API | Shared application state |
| React Router DOM | Client-side navigation |
| Axios | HTTP requests and API integration |
| Bootstrap 5 | Responsive styling and UI components |
| React Bootstrap | Bootstrap components for React |
| React Paginate | Pagination controls |
| React Awesome Reveal | UI animations |
| Font Awesome | Icons |
| TMDB API | Movie data source |
| Git & GitHub | Version control and source code hosting |

## 🔌 API Integration

Movies Show uses the [TMDB API](https://developer.themoviedb.org/docs) to retrieve movie information.

The application uses TMDB endpoints for:

- **Trending Movies:** Retrieve movies trending daily.
- **Popular Movies:** Retrieve currently popular movies.
- **Top-Rated Movies:** Retrieve movies with high ratings.
- **Upcoming Movies:** Retrieve upcoming releases.
- **Movie Search:** Find movies based on a search query.
- **Movie Details:** Retrieve information about a specific movie.

API requests are handled using Axios. The application uses React Context and state to distribute the retrieved data to the relevant components.

### API Documentation

For endpoint details and API access requirements, visit the [official TMDB developer documentation](https://developer.themoviedb.org/docs).

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm, which is included with Node.js
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/FadyAdel310/Movies-Show.git
```

### 2. Navigate to the Project Directory

```bash
cd Movies-Show
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm start
```

The application will start in development mode. Open the following address in your browser:

[http://localhost:3000](http://localhost:3000)

The development server automatically reloads the application when supported source files change.

**API configuration:** The current source code contains the TMDB API key in `src/components/ApiContext.js`. Before redistributing or deploying the project, move the key into an environment variable and update the API request code to read it. For example, in a Create React App project, use `REACT_APP_TMDB_API_KEY` in a local `.env` file and reference `process.env.REACT_APP_TMDB_API_KEY` in the application. Do not commit your `.env` file or expose a new private credential in a public repository.

## 📂 Project Structure

The main project structure is organized as follows:

```text
Movies-Show/
├── public/
├── src/
│   ├── components/
│   │   ├── ApiContext.js
│   │   ├── GlobalContext.js
│   │   ├── GetSpecificMovie.js
│   │   ├── SearchPage.js
│   │   ├── Header.js
│   │   ├── Landing.js
│   │   ├── Movies.js
│   │   ├── FullPageViewer.js
│   │   └── ...
│   ├── App.js
│   ├── App.css
│   ├── global.css
│   └── index.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

*Note: The tree highlights the main files and components; it is not an exhaustive listing of every file in the repository.*

### Key Components

- **`App.js`:** Renders the main application layout, including the header, featured movie section, movie categories, and footer.
- **`index.js`:** Initializes the React application, configures the application contexts, and defines the main routes.
- **`ApiContext.js`:** Handles movie API requests and shares movie data and pagination state through React Context.
- **`GlobalContext.js`:** Manages global interface preferences, including language and theme.
- **`SearchPage.js`:** Displays search results and pagination, including a message when no movies match the search.
- **`GetSpecificMovie.js`:** Handles navigation to a page associated with a specific movie ID.
- **`Header.js`:** Provides the application's header and navigation interface.
- **`Landing.js`:** Renders the featured movie section.
- **`FullPageViewer.js`:** Displays the application's movie category sections.

## 📜 Available Scripts

The following commands are defined in `package.json`:

| Command | Description |
|---|---|
| `npm start` | Starts the local development server. |
| `npm run build` | Creates an optimized production build in the `build` directory. |
| `npm test` | Runs the configured test runner. |
| `npm run deploy` | Runs the deployment script configured for GitHub Pages. |

To create a production build:

```bash
npm run build
```

## 🌐 Deployment

The project is configured for deployment to GitHub Pages.

**Live application:** [Movies Show](https://fadyadel310.github.io/Movies-Show/)

To deploy using the configured script:

```bash
npm run deploy
```

The deployment script publishes the production build to GitHub Pages. Ensure the repository's GitHub Pages settings and deployment permissions are configured correctly.

## 🔮 Future Improvements

Potential enhancements for future versions include:

- Add a dedicated favorites or watchlist feature.
- Improve loading indicators, error handling, and empty states.
- Add automated tests for important components and user interactions.
- Improve accessibility and keyboard navigation.
- Add filters for genres, release years, and ratings.
- Improve API credential management and configuration.

These are potential enhancements rather than claims about existing functionality.

## 👨‍💻 Author

**Fady Adel Awad**

- GitHub: [@FadyAdel310](https://github.com/FadyAdel310)
- LinkedIn: [Fady Adel](https://www.linkedin.com/in/fady-adel-b0430b428/)

---

*Built with React, JavaScript, and TMDB API.*
