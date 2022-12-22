import React, { memo } from 'react';

// PureComponent의 역할은 두 가지가 있다. 1. state의 값이 변경될 때만 리렌더링 해주기, 2.props 값이 변경될 때만 리렌더링 해주기
// React.memo는 class형 컴포넌트에서의 PureComponent의 역할 중 props 값이 변경될 때만 리렌더링 해주는 역할과 같다.
// 부모 컴포넌트가 리렌더링 되면 자식 컴포넌트도 같이 리렌더링 되는데 이를 방지하고, props 값이 변경될 때만 리렌더링 되도록 해준다.

const Try = memo(({ tryInfo }) => {
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
});

export default Try;
