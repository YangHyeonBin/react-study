import React, { useState } from 'react';

// import ExpenseItem from './components/ExpenseItem'; // components 폴더 속 ExpenseItem(.js)에서 불러오기
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
]

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => { // 최신의 이전 state를 자동으로 받아오도록 prev~를 매개변수로 받는 함수를 사용
      return ([expense, ...prevExpenses]); // addExpenseHandler의 매개변수로 받은 expense, 최신의 이전 state를 받아오는 prevExpenses(를 ...로 훑은 것)를 하나의 새로운 배열에 저장해 반환
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items = {expenses} />
    </div>
  )
}

export default App
