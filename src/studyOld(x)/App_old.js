// import Button from "./Button";
// import styles from "./App.module.css";
// 스텝2. App.js에서는 state들을 만들어내는 곳이라고 생각하면 된다.
import { func } from "prop-types";
import { useState, useEffect } from "react";

function Hello() {
  // function byeFn() {
  //   console.log("bye :(");
  // }
  // function hiFn() {
  //   console.log("hi :) ");
  //   return byeFn;
  //   //return은 hi함수가 파괴되면 되돌려줌.
  //   //길게 썼지만 결국 아래 주석처리해둔거랑 같은 내용이고 이해하기 쉽게 길게 풀어써둔것.
  //   //그리고 클린업은 자주 필요하지 않음.
  // }

  // useEffect(() => {
  //   return () => console.log("사라졌당 :( ");
  //   // return () => console.log("사라졌당 :( ");
  //   //위와 같은 모습을 한 펑션을 clean up 펑션이라고 한다.
  //   //clean up 펑션은 파괴될 때 실행되는 함수다.
  //   //무언가 없어지면서 어떤 분석결과를 보내고 싶을 때 사용 가능하다.
  // }, []);

  useEffect(function () {
    console.log("ㅎㅇ :) ");
    return function () {
      console.log("ㅂㅂ");
    };
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  // 여기서 hide되면 요소검사에서도 아예 사라짐.
  //숨기는게 아니라 없애버리는 것.
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

//버튼을 누르면 카운트되는 App
// function App() {
//   const [counter, setValue] = useState(0);
//   const [keyword, setKeyWord] = useState("");
//   const onClick = () => setValue((prev) => prev + 1);
//   const onChange = (e) => setKeyWord(e.target.value);
//   useEffect(() => {
//     console.log("나는 한번만 실행 돼요.");
//   }, []);
//   useEffect(() => {
//     console.log("나는 'keyword'가 바뀌면 실행 돼요.");
//   }, [keyword]);
//   useEffect(() => {
//     console.log("나는 'counter'가 바뀌면 실행 돼요.");
//   }, [counter]);
//   useEffect(() => {
//     console.log("나는 'keyword & counter'가 바뀌면 실행 돼요.");
//   }, [keyword, counter]);

//   //useEffect()라는 건 memo와는 다르게 단 1번만 실행한다.
//   //memo는 내용이 바뀌지 않으면 1번, 바뀌면 리렌더를 하지만 이건 바꾸건 말건 딱 1번.
//   //[]는 변화하는걸 지켜볼 녀석을 고른다. 비워놓으면 아무것도 없으니 1번만 실행
//   //[]를 채워놓으면 그녀석이 변하는건 지켜보면서 업데이트 해준다.
//   //단, 다른 것이 변화해도 해당 녀석이 변화하는건 아니니까 무시. 1회만 실행

//   return (
//     <div>
//       <input
//         value={keyword}
//         onChange={onChange}
//         type="text"
//         placeholder="search here..."
//       />
//       <h1>{counter}</h1>
//       <button onClick={onClick}>눌러!</button>
//     </div>
//   );

//   //클래스 설정하는 return
//   // return (
//   //   <div>
//   //     <h1 className={styles.title}>돌아온 걸 환영해요!!! </h1>
//   //     <Button text={"컨티뉴!"} />
//   //   </div>
//   // );
// }

export default App;
