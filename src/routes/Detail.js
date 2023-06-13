import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
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
      <h1>영화 정보</h1>
      <div>
        <img src={movieInfo.medium_cover_image} alt={movieInfo.title} />
        <div className="info_right">
          <h2>{movieInfo.title_long}</h2>
          <p className="rating">⭐ {movieInfo.rating}</p>
          <p className="like_count">❤️ {movieInfo.like_count}</p>
          <ul>
            {movieInfo.genres &&
              movieInfo.genres.map((g) => <li key={g}>{g}</li>)}
          </ul>
        </div>
      </div>
      <p className="movieIntro">{movieInfo.description_intro}</p>
    </div>
  );
}

export default Detail;
