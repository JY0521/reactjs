import Button from "./Button";
import styles from "./App.module.css";
// 스텝2. App.js에서는 state들을 만들어내는 곳이라고 생각하면 된다.

function App() {
  return (
    <div>
      <h1 className={styles.title}>돌아온 걸 환영해요!!! </h1>
      <Button text={"컨티뉴!"} />
    </div>
  );
}

export default App;
