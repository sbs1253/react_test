import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [usd, setUsd] = useState(0);
  const onChange = (event) => {
    setUsd(event.target.value);
  };

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((data) => {
        setCoins(data);
        setLoading(false);
      });
  });
  return (
    <div>
      <h1>The Coins! {loading ? '' : `(${coins.length})`}</h1>
      <div>
        <label htmlFor="USD">usd</label>
        <input
          id="USD"
          value={usd}
          onChange={onChange}
          type="number"
          placeholder="price"
        ></input>
        <br />
      </div>
      <hr />
      {loading ? (
        <div>
          <hr />
          <strong>Loading...</strong>
        </div>
      ) : (
        <select>
          {coins.map((coin, id) => (
            <option>
              {coin.name}({coin.symbol}) : ${coin.quotes.USD.price} USD
              {usd / coin.quotes.USD.price}
              {coin.symbol}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
//  내보낼때 중괄호 안써도됨
//  가격 입력할시 몇코인 살수있는지 변환
