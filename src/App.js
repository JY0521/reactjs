import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
//위에 작성한건 강의에서 알려준 구버전이며 현재는 미사용.
//최신버전 react-route-dom은 아래와 같이 사용한다.
//1. Switch가 Routers로 대체되었으며 Switch는 사용되지 않는다.
//2. Route자식 사이에 <Home/>을 넣지 않으며
//   자기 자신 안에 element={<Home/>} 넣으면 되도록 개편되었다.

// return (
//   <Router>
//   <Routes>
//   <Route path="/" element={<Home />} />
//   </Routes>
//   </Router>
//   );

export default App;
