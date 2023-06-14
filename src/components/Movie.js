//propTypes를 가져와서 적용시키기
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

//부모한테서 props를 받아올것
function Movie({ id, coverImg, title, genres, rating }) {
  return (
    <div className={styles.movie}>
      <div className={styles.movie__wrap}>
        <Link to={`/movie/${id}`}>
          <div className={styles.movie__img}>
            <img src={coverImg} alt={title} />
          </div>
          <h2 className={styles.movie__title}>{title}</h2>
        </Link>
        <ul className={styles.movie__genres}>
          {
            //genres가 없는 영화가 있는경우 에러가 나기 때문에
            //장르가 있는 것만 불러오기 위해 &&을 적용
            genres && genres.map((g) => <li key={g}>{g}</li>)
          }
        </ul>
        <p className={styles.movie__rating}>
          <span>☆</span> {rating}
        </p>
      </div>
    </div>
  );
}

//prop-types의 타입을 설정하기
Movie.propTypes = {
  id: propTypes.number.isRequired,
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  //장르는 배열이기 때문에arrayOf()안에 적어준다.
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};

//클릭해서 페이지 넘어가는건 터미널에서 npm install react-router-dom 설치해줘야함.

export default Movie;
