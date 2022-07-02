import React, { useState } from 'react'; // React는 리액트 객체 그 자체, useState는 'react' 라이브러리 속 함수

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'; // 상위 폴더로 올라가서 UI 폴더 찾고 그 속의 Card.js 선택
import './ExpenseItem.css';

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title); // useState는 항상 이 자리에

  const clickHandler = () => {
    setTitle('Updated!')
    console.log(title);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem
