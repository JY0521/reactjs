import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  //기본값을 ([]) 비어있는 배열로 만들어준다.
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      //input이 공란이라면 함수가 실행되지 않도록 한다.
      return;
    }

    //직접 수정하기보다는 이전의 배열을 가져와서 함수로 변경
    //function currentArray(){} 라고 쓰나 currentArray => [] 라고 쓰나 똑같다.
    //새로운 toDo + 기존의 toDos목록을 하려면 ...을 붙여야함.
    //...이 없으면 [추가, [기존]]처럼 2중 배열이 생김
    setToDos((currentArray) => [toDo, ...currentArray]);

    //등록 후 input란을 다시 비워주기
    setToDo("");
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="오늘 해야 할 일은?"
        />
        <button>추가하기</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          //.map()을 사용하려면 key값을 설정해줘야함.
          //.map(값을 칭할 이름, 번호)
          //배열이 6개라면 item이 6개의 방을 차례로 돌면서 =>뒤에있는 모습으로 변경시킴
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
