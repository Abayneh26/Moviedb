import React, { useState, useEffect } from "react";
import NetflixBannerLogo from "../../assets/image/logo.png";
import { Play, Info } from "lucide-react";
import styles from "./Banner.module.css";
import { movieInstance } from "../../Uitility/MovieInstance";

import requests from './../../Uitility/requestUrls';

const BANNER_BASE = "https://image.tmdb.org/t/p/original";

function Banner() {

const [bannerImage, setBannerImage] = useState({});

  useEffect(() => {
        // api call to fetch banner data
        async function fetchBannerImage() {
            const request = await movieInstance.get(requests.fetchNetflixOriginals);
            setBannerImage(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
        }
        fetchBannerImage();
    }, [])

function truncateString(str, num) {
    if (str?.length > num) {
        return str.slice(0, num) + '...';
    }
    return str;
}

  return (
    <div className={styles.banner}
    style={
        {
            backgroundSize : 'cover',
            backgroundImage :`url("${BANNER_BASE}${bannerImage.backdrop_path}")`
        }
    }
    
    
    >
      <div className={styles.contents}>
        {/* netflix image */}
        <img  className= {styles.logoImg} src={NetflixBannerLogo} alt="Netflix logo" />

        {/* title */}

        <h1 className={styles.title}>
          {truncateString(bannerImage?.original_name, 50)}
        </h1>
        {/* description */}
        <h1 className= {styles.description}>
          {truncateString(bannerImage?.overview, 150)}
        </h1>

        {/* buttons */}
        <div className={styles.buttonContainer}>
          <button className={styles.button}>
            <Play size={30} />
            Play
          </button>
          <button className={styles.button}>
            <Info size={30} />
            My List
          </button>
        </div>
      </div>

      {/* fading */}
      <div className={styles.fadeBottom}></div>
    </div>
  );
}

export default Banner;
