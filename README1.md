# DJS05 Podcast Discovery App

## Project Summary

This project is a React-based podcast browsing application built with Vite. It allows users to explore a collection of podcast shows, search for specific titles, filter by genre, sort results, and open detailed pages for individual shows. The app is designed to be simple, modern, and user-friendly.

## Purpose of the Project

The main goal of this project was to practice building a complete front-end experience using React. It focuses on state management, routing, component structure, API fetching, and responsive UI design. The project demonstrates how a real web app can be organized into reusable and maintainable parts.

## Key Features

- Browse a list of podcast shows from an external API
- Search podcasts by title
- Filter shows by genre
- Sort shows by different criteria
- Navigate between pages using pagination
- View detailed information about each show on a separate page
- Display loading and error states when data is being fetched
- Keep the interface clean and responsive across screen sizes

## Technologies Used

- React.js for the user interface
- Vite for fast development and build tooling
- React Router for navigation and dynamic routes
- CSS Modules for component-based styling
- JavaScript ES6+ for app logic

## App Workflow

1. The app loads podcast data from an API when the page starts.
2. The homepage displays podcasts with search, filter, and sorting controls.
3. Users can click a podcast card to view its details.
4. The detail page uses a dynamic route to show the selected show.
5. The app updates the UI smoothly while handling loading and error conditions.

## Project Structure

- src/App.jsx: Main app layout and routing
- src/components: Reusable UI components such as cards, filters, and pagination
- src/context: Shared state for podcast data
- src/data.js: Static genre data
- src/utils: Helper functions

## Installation and Run

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

## Learning Outcomes

This project improved my understanding of React component design, routing, API integration, state handling, and clean project organization. It also helped me build a more polished and professional user experience.

## Author

Leonard M. Kasimu

## Status

A functional podcast discovery app with browsing, filtering, searching, and detailed show pages.
