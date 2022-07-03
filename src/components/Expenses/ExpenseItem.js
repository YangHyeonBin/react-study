import React from 'react'; // React는 리액트 객체 그 자체, useState는 'react' 라이브러리 속 함수

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'; // 상위 폴더로 올라가서 UI 폴더 찾고 그 속의 Card.js 선택
import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem
