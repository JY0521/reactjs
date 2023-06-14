import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import home from "./icon_home.svg";
import styles from "./Detail.module.css";
//url에 있는 id값을 받아오려면 useParams를 사용하면 된다.

function Detail() {
  const [movieInfo, setMovieInfo] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieInfo(json.data.movie);
  };
  // console.log(id); //id값이 출력됨
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <Link to={`/reactjs/`}>
        <img src={home} alt="home" className={styles.home__btn} />
      </Link>
      <h1 className={styles.h1}>영화 정보</h1>

      <div className={styles.info__bgimg}>
        <img src={movieInfo.background_image} alt={movieInfo.title} />
      </div>
      <div className={styles.info__wrap}>
        <div className={styles.info__left}>
          <img
            src={movieInfo.medium_cover_image}
            alt={movieInfo.title}
            className={styles.info__img}
          />
        </div>
        <div className={styles.info__right}>
          <p className={styles.info__rating}>
            <span>★</span> {movieInfo.rating}
          </p>
          <p className={styles.info__like}>
            <span>♥</span> {movieInfo.like_count}
          </p>
          <ul>
            {movieInfo.genres &&
              movieInfo.genres.map((g) => <li key={g}>{g}</li>)}
          </ul>
        </div>
      </div>
      <h2 className={styles.info__title}>{movieInfo.title_long}</h2>
      <p className={styles.info__intro}>{movieInfo.description_intro}</p>
    </div>
  );
}

export default Detail;
