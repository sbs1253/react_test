/* import { useState, useEffect } from 'react';
function Hello() {
  function byFn() {
    console.log('bye :)');
  }
  function hiFn() {
    console.log('hi :)');
    return byFn;
  }
  useEffect(hiFn, []);
  return <h1>Hello</h1>;
}
function App() {
  const [show, setShow] = useState(false);
  const onClick = () => {
    setShow((prev) => !prev);
  };
  return (
    <div>
      {show ? <Hello /> : null}
      <button onClick={onClick}>{show ? 'hide' : 'show'}</button>
    </div>
  );
}

export default App;
//  내보낼때 중괄호 안써도됨
 */ // 아래와 같은 코드

import { useState, useEffect } from 'react';

function Hello() {
  useEffect(() => {
    console.log('hi :)');
    return () => console.log('bye :)');
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [show, setShow] = useState(false);
  const onClick = () => {
    setShow((prev) => !prev);
  };
  return (
    <div>
      {show ? <Hello /> : null}
      <button onClick={onClick}>{show ? 'hide' : 'show'}</button>
    </div>
  );
}

export default App;
//  내보낼때 중괄호 안써도됨
