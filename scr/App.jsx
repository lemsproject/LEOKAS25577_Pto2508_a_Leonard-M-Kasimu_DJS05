import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PodcastProvider } from "./context/PodcastContext";
import { genres } from "./data";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SortSelect from "./components/SortSelect";
import GenreFilter from "./components/GenreFilter";
import PaginationModeSelector from "./components/PaginationModeSelector";
import PodcastGrid from "./components/PodcastGrid";
import Pagination from "./components/Pagination";
import ShowDetail from "./components/ShowDetail";
import styles from "./App.module.css";
import "../styles.css";

/**
 * App
 * Fetches the show preview list and renders the homepage or the show
 * detail page based on the current route.
 * @returns {JSX.Element}
 */
export default function App() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchShows() {
      setLoading(true);
      setFetchError(null);

      try {
        const res = await fetch("https://podcast-api.netlify.app/shows");
        if (!res.ok) throw new Error("Unable to load shows");
        const data = await res.json();
        if (!cancelled) setShows(data);
      } catch (err) {
        if (!cancelled) setFetchError(err.message || "Unable to load shows");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchShows();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <PodcastProvider initialPodcasts={shows}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<HomePage loading={loading} error={fetchError} />}
          />
          <Route path="/show/:id" element={<ShowDetail />} />
        </Routes>
      </Router>
    </PodcastProvider>
  );
}

/**
 * HomePage
 * Displays the podcast browsing UI, including filters, search, and the
 * podcast grid, while preserving UI state from the context provider.
 * @param {{loading:boolean,error:string|null}} props
 * @returns {JSX.Element}
 */
function HomePage({ loading, error }) {
  return (
    <div>
      <Header />

      <div className={styles.controls}>
        <SearchBar />
        <GenreFilter genres={genres} />
        <SortSelect />
        <PaginationModeSelector />
      </div>

      {loading ? (
        <div className={styles.loadingMessage}>Loading shows…</div>
      ) : error ? (
        <div className={styles.errorMessage}>
          Unable to load podcasts. Please try again later.
        </div>
      ) : (
        <>
          <PodcastGrid genres={genres} />
          <Pagination />
        </>
      )}
    </div>
  );
}
