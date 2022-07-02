import React, { useState } from 'react'

import './ExpenseForm.css'

// form을 위한 컴포넌트

const ExpenseForm = (props) => { // 부모 컴포넌트인 NewExpense에서 ExpenseForm의 속성으로 쓴 onSaveExpenseData(함수가 저장된 prop)를 받아와 실행하기 위해 매개변수로 props를 받음
  const [enteredTitle, setEnteredTitle] = useState('') // 초기 값은 빈 문자열이어야 함
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  /* 한 번에 정의하는 법: 객체 형식
  const [userInput, setuserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  }); 
  
  // 이벤트핸들러 정의 방법 1
  const titleChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      enteredTitle: e.target.value
    })
  };  
  // amountChangeHandler, dateChangeHandler도 똑같은 방식으로 정의
  // 많은 state를 이전 상태에 의존해 불러와 오류 발생 가능성 있음

  // 더 좋은 방법, 이전 상태에 의존한다면 이걸 쓰기!
  const titleChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevSate, enteredTitle: e.target.value };
    });
  };
  // amountChangeHandler, dateChangeHandler도 똑같은 방식으로 정의
  // 최신 state를 가져와 더 믿을 만한 방법
  */

  const submitHandler = (e) => {
    e.preventDefault() // 버튼 누르면 제출&새로고침 막음

    const expenseData = {
      // user input 담은 객체
      title: enteredTitle, // enteredTitle이라는 state를 저장
      amount: enteredAmount,
      date: new Date(enteredDate), // 문자열인 enteredDate를 날짜 객체로 변환해 저장
    }

    props.onSaveExpenseData(expenseData); // 부모인 NewExpense에 user input 객체인 expenseData 전달
    setEnteredTitle(''); // submit 이벤트 발생 시(폼 제출 시) state enteredTitle가 빈 문자열로 바뀌도록
    setEnteredAmount(''); 
    setEnteredDate('');
  }

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value) // 값 저장, 폼 제출시 모아서 결합해야 함
  }
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value) // target.value는 항상 문자열 형태 -> useState의 초기 값으로 빈 문자열 전달한 이유.
  }
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value)
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle} // input의 내용물이 위에서 정의한 state enteredTitle이 되도록 -> 즉, 빈 문자열이 되어 다시 입력 가능한 초기 상태 되도록
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancelEiditing}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
