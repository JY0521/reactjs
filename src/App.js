import { useEffect, useState } from "react";
import Movie from "./components/Movie";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    //await로 fetch작성 후 await로 json을 가져옴
    // const json = await response.json(); 이걸 안쓰려면 위의 함수처럼 작성하면 됨.
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);

  //오래된 방식
  // useEffect(() => {
  //   //fetch(``) API를 호출하는 함수. 백틱 안에 링크를 넣을 것
  //   //한국 영화진흥위원회에서 제공하는 무료 API. 가입해서 키발급
  //   //https://www.kobis.or.kr/kobisopenapi/homepg/apiservice/searchServiceInfo.do
  //   fetch(
  //     `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=71c925e2920963141d5e1dccdc3d6a19&targetDt=20230101 `
  //   )
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setMovies(json.boxOfficeResult.dailyBoxOfficeList);
  //       setLoading(false); //로딩이 끝나면 Loading문구를 안보기게 처리
  //     });
  // }, []);
  //fetch().then((response) => response.json()) json을 리스폰한 후 리스폰 안에 json을 담는다
  //.then((json)=> 내 useState set함수) 그 json을 useState안에 (배열위치)담아준다.
  // *****!!!! 그런데 then()함수는 잘 안씀. async-await함수를 주로 사용.

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
