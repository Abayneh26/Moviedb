import React, { useState, useEffect } from 'react'
import styles from "./DisplayRow.module.css";
import SlideShow from '../SlideShow/SlideShow';
import {movieInstance} from "../../Uitility/MovieInstance";
import requests from '../../Uitility/requestUrls';

function DisplayRow() {
  const [movies, setMovies] = useState({
    trending: [],
    netflixOriginals: [],
    topRated: [],
    actionMovies: [],
    comedy: [],
    horror: [],
    romance: [],
    documentaries: []
  });

  const fetchMovies = async () => {
    try {
      const [
        trendingResponse,
        netflixOriginalsResponse,
        topRatedResponse,
        actionMoviesResponse,
        comedyResponse,
        horrorResponse,
        romanceResponse,
        documentariesResponse
      ] = await Promise.all([
        movieInstance.get(requests.fetchTrending),
        movieInstance.get(requests.fetchNetflixOriginals),
        movieInstance.get(requests.fetchTopRated),
        movieInstance.get(requests.fetchActionMovies),
        movieInstance.get(requests.fetchComedyMovies),
        movieInstance.get(requests.fetchHorrorMovies),
        movieInstance.get(requests.fetchRomanceMovies),
        movieInstance.get(requests.fetchDocumentaries)
      ]);

      setMovies({
        trending: trendingResponse.data.results,
        netflixOriginals: netflixOriginalsResponse.data.results,
        topRated: topRatedResponse.data.results,
        actionMovies: actionMoviesResponse.data.results,
        comedy: comedyResponse.data.results,
        horror: horrorResponse.data.results,
        romance: romanceResponse.data.results,
        documentaries: documentariesResponse.data.results
      });
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className={styles.mainWrapper}>
      <SlideShow title="Movie suggestions" movies={movies.trending} />
      <SlideShow title="Popular on Netflix" movies={movies.netflixOriginals} />
      <SlideShow title="Trending Now" movies={movies.actionMovies} />
      <SlideShow title="Movie suggestions" movies={movies.topRated} />
    </div>
  );
}

export default DisplayRow;