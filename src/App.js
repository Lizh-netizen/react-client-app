import { useState, React, useEffect, memo, useCallback } from 'react';

const Button = memo(function Button() {
  console.log('Button重新渲染了');
  return (
    <>
      <button>按钮</button>
    </>
  );
});
export default function App() {
  const [state, setState] = useState(0);

  const handleClick = () => {
    setState(state + 1);
  };
  useEffect(() => {
    console.log('组件渲染');
  }, [state]);

  const handleClickBtn = useCallback(() => {
    console.log('点击了按钮');
  }, []);
  return (
    <>
      <div>
        <span>{state}</span>
        <button onClick={handleClick}>+</button>
        <Button onClick={handleClickBtn}></Button>
      </div>
    </>
  );
}
