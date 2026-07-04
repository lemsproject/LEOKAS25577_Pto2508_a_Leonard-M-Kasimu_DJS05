# DJS05: Show Detail Page with Routing and Navigation

## Project Overview

In this project, you will build a podcast show detail page as part of a larger podcast browsing app. When users select a show from the homepage or listing page, they should be taken to a dedicated page that displays all details about that show. The app will support dynamic routing so each show has its own unique URL.

You will implement data fetching based on the show ID in the URL, handle loading and error states gracefully, and ensure a smooth user experience by preserving search filters and pagination when users navigate back to the homepage. Additionally, you will build a season navigation system allowing users to expand or switch between seasons to browse episodes efficiently.

This project will demonstrate your ability to work with dynamic routes, manage state across pages, handle asynchronous data, and create a clean, maintainable React codebase.

![alt text](<Show Page Podcast.png>)

---

## Local Setup

To run the project locally:

```bash
npm install
npm run dev
```

Or build for production with:

```bash
npm run build
```

## Core Objectives

- Implement **dynamic routing** for unique show detail pages.
- Pass the correct show ID via route parameters and use it to **fetch specific show data**.
- Gracefully handle **loading, error, and empty states** during data fetching.
- Display comprehensive show details including title, image, description, genres, and last updated date.
- Preserve previous **filters and search state** when navigating back to the homepage.
- Create an intuitive **season navigation** UI to expand and switch between seasons without excessive scrolling.
- Display episode information clearly with numbering, titles, images, and shortened descriptions.
- Maintain **high code quality** with documentation (JSDoc) and consistent formatting.

---

### API Endpoints

Data can be called via a `fetch` request to the following three endpoints. Note that there is not always a one-to-one mapping between endpoints and actual data structures. Also note that **\*`<ID>`** indicates where the dynamic ID for the requested item should be placed. For example: `[https://podcast-api.netlify.app/genre/3](https://podcast-api.netlify.app/genre/3)`\*

| URL                                          |                                                                                        |
| -------------------------------------------- | -------------------------------------------------------------------------------------- |
| `https://podcast-api.netlify.app`            | Returns an array of PREVIEW                                                            |
| `https://podcast-api.netlify.app/genre/<ID>` | Returns a GENRE object                                                                 |
| `https://podcast-api.netlify.app/id/<ID>`    | Returns a SHOW object with several SEASON and EPISODE objects directly embedded within |

### Genre Titles

Since genre information is only exposed on `PREVIEW` by means of the specific `GENRE` id, it is recommended that you include the mapping between genre id values and title in your code itself:

| ID  | Title                    |
| --- | ------------------------ |
| 1   | Personal Growth          |
| 2   | Investigative Journalism |
| 3   | History                  |
| 4   | Comedy                   |
| 5   | Entertainment            |
| 6   | Business                 |
| 7   | Fiction                  |
| 8   | News                     |
| 9   | Kids and Family          |

## Deliverables

1. **Homepage / Listing Page**
   - List of shows with clickable links or buttons that navigate to each show's detail page.
   - Filters and search functionality that maintain state when navigating back from detail pages.

2. **Dynamic Show Detail Page**
   - A unique page for each show, accessible via a dynamic route.
   - Fetch and display show details including:
     - Title
     - Large podcast image
     - Description
     - Genre tags
     - Last updated date (formatted)
   - Display loading indicator while fetching data.
   - Display user-friendly error message if fetching fails.
   - Handle empty states gracefully (e.g., show not found).

3. **Season Navigation Component**
   - UI to expand/collapse seasons.
   - Show season title and episode count.
   - List episodes per season including:
     - Episode number
     - Episode title
     - Season image
     - Shortened episode description

4. **State Preservation**
   - Maintain applied filters and search terms when navigating back to the homepage from a show detail page.

5. **Code Quality**
   - Well-structured, modular React components.
   - JSDoc comments for all major functions and modules.
   - Consistent and readable formatting across all files.

6. **Responsive Design**
   - The UI adapts smoothly across different device sizes (mobile, tablet, desktop).

7. **README Documentation**
   - Brief project overview.
   - Instructions for running the project locally.
   - Description of main features and any known limitations.

---
