import React, { useRef, useState } from 'react';

const ResponseCheck = () => {
  const [state, setState] = useState('waiting');
  const [message, setMessage] = useState('클릭해서 시작하세요.');
  const [result, setResult] = useState([]);

  // 화면을 바꾸면서 리렌더링하고 싶지는 않은데 값이 변하는 것들을 useRef로 사용하기도 한다.
  const timeout = useRef(null);
  const startTime = useRef();
  const endTime = useRef();

  const onClickScreen = () => {
    if (state === 'waiting') {
      setState('ready');
      setMessage('초록색이 되면 클릭하세요.');
      timeout.current = setTimeout(() => {
        setState('now');
        setMessage('지금 클릭!');
        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 2000); // 2-3초 사이의 랜덤한 수
    } else if (state === 'ready') {
      // 성급하게 클릭
      clearTimeout(timeout.current);
      setState('waiting');
      setMessage('너무 성급하시군요! 초록색이 되면 클릭하세요.');
    } else if (state === 'now') {
      // 반응 속도 체크
      endTime.current = new Date();
      setState('waiting');
      setMessage('클릭해서 시작하세요.');
      setResult((prevState) => [
        ...prevState,
        endTime.current - startTime.current,
      ]);
    }
  };

  const onReset = () => {
    setResult([]);
  };

  const renderAverage = () => {
    return result.length === 0 ? null : (
      <>
        <div>평균 시간: {result.reduce((a, c) => a + c) / result.length}ms</div>
        <button onClick={onReset}>리셋</button>
      </>
    );
  };

  return (
    <>
      <div id='screen' className={state} onClick={onClickScreen}>
        {message}
      </div>
      {renderAverage()}
    </>
  );
};

export default ResponseCheck;
