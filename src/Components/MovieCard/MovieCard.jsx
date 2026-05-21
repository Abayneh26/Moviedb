import React from "react";
import styles from "./MovieCard.module.css";
import {FaCirclePlay} from "react-icons/fa6";
import {BsPlusCircle} from "react-icons/bs";
import {GoCheckCircleFill} from "react-icons/go";
import {IoIosArrowDropdownCircle} from "react-icons/io";


const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

function MovieCard({movie}) {
console.log(movie);
    let genres = ["Action", "Adventure",  "Thriller"];
  return (
    <div className={styles.cardwrapper}>
      {/* poster image*/}
     
      <img className={styles.poster} src={`${IMAGE_BASE}${movie?.poster_path}`} alt="poster image" />
      {/* hover card */}
      <div className={styles.hoverCard}>
        {/* img */}
        <img className={styles.hoverImage} src={`${IMAGE_BASE}${movie?.poster_path}`} alt="hover image" />
        {/* badge*/}

        <div className={styles.badge}>Recently added</div>
        {/* button row*/}
        <div className={styles.buttonsRow}>
            <FaCirclePlay className={styles.circleButtonLarge} size={40} color="white"/>
            <BsPlusCircle className={styles.circleButtonSmall} size={40} color="white"/>
            <GoCheckCircleFill className={styles.circleButtonSmall} size={40} color="white"/>
            <IoIosArrowDropdownCircle  className= {styles.circleButtonSmall} size={40} color="white"/>
        </div>

        {/* metadata row */}
<div className={styles.metaRow}>
    <span className={styles.tag}> U/A 16+ </span>
    <span className={styles.tag}>Movie  </span>
    <span className={styles.tag}> HD </span>
</div>
        {/* genres */}
        <div className={styles.genres}>
            {genres?.map((g, index) => {
                return (
                <span key={index}>
                    {g}
                    {index < genres.length - 1 && <span className={styles.dot}>•</span> }
                </span>
            ) ;
            })}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
