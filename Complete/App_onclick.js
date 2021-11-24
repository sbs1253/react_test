import { useState, useEffect } from 'react';
function App() {
  const [count, setcount] = useState(0);
  const [key, setKey] = useState('');
  const onChange = (event) => setKey(event.target.value);
  const onClick = () => setcount((value) => value + 1);
  useEffect(() => {
    console.log('one render');
  }, []); // 한번만 실행하게 하는 함수
  useEffect(() => {
    if (key.length > 5 && key !== '') {
      console.log('search for');
    }
  }, [key]); //key 값이 변했을때 함수 호출
  return (
    <div>
      <input
        value={key}
        onChange={onChange}
        type="text"
        placeholder="keyword search"
      />
      <h1>{count}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
//  내보낼때 중괄호 안써도됨
