import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  //받아온 코인을 컴포넌트에 넣으려면 받아온 데이터를 useState에 넣어준다.
  const [coins, setCoins] = useState([]);
  //기본값을 []빈 배열로 두는 이유는 []빈 배열이 없으면
  //코인데이터를 불러오기 전 coins의 값이 undifine상태이기 때문에 에러가 나게 됨.
  const [myUSD, setMyUSD] = useState(0);
  const [cost, setCost] = useState(1);
  const onChange = (e) => {
    setCost(e.target.value);
    setMyUSD(1);
  };
  const onChangeUSD = (e) => setMyUSD(e.target.value);
  console.log(cost);
  console.log(myUSD);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        //코인 불러오기 끝내면 로딩창 삭제
        setLoading(false);
      });
    //일단 작성. coin을 생성하는 api를 실행, json을 통해 받아옴.
  }, []);
  //[] 주시하려는 항목이 비어있으면 단 한번만 실행.
  return (
    <div>
      <h1>the Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select onChange={onChange}>
            <option>선택하세요</option>
            {coins.map((coin) => (
              <option key={coin.id} value={coin.quotes.USD.price}>
                {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
          <div>
            바꿀 USD :{" "}
            <input
              onChange={onChangeUSD}
              value={myUSD}
              type="number"
              placeholder="USD"
            />
            <h3>얻을 수 있는 코인:{myUSD / cost}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
