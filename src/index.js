import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";
// import "./styles.css"; 버튼 디자인을 여러개 적용하고 싶으면 여기 import하면 안됨.

// 스텝1. index.js에는 root에 렌더할 state들(App.js)를 작성하거나(물론 import하고 밑에추가)
// index 에 글로벌하게 적용할 css를 임포트하거나 한다.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
