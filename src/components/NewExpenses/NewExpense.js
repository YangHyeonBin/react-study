import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

// 사용자 input으로 새로운 expenses 받는 컴포넌트
// input을 위한 form 반환이 목적 -> 별도 컴포넌트로 분리: ExpenseForm

// function 키워드로도, 화살표 함수와 변수 선언하는 키워드로도 컴포넌트 생성 가능
const NewExpense = (props) => { // 부모 컴포넌트인 App에서 정의한 속성 가져와 속성 값인 함수 실행하기 위해 props 받음
  const saveExpenseDataHandler = (enteredExpenseData) => { // user가 새로운 expenseData를 저장했을 때(라는 자체 이벤트 prop을 아래에 만들었음) 실행할 함수 // 매개변수로 자식 컴포넌트(ExpenseForm)의 데이터(=submitHandler에서 생성한 expenseData 객체)를 받음
    const expenseData = { // 새로운 객체
      ...enteredExpenseData, // 자식 컴포넌트의 데이터를 ...로 훑어 이 객체에 저장
      id: Math.random().toString() // 데이터 식별 위해 id 부여
    };
    
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense;