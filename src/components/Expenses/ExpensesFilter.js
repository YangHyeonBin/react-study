import React, { useState } from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  // changeHandler로 수신한 걸 state에 저장
  const [selectedYear, setSelectedYear] = useState(''); // 초기 값 빈 문자열 X, 유저 선택한 연도여야 함 -> 어떻게?
  
  const changeHandler = (e) => {
    setSelectedYear(e.target.value);
    console.log(selectedYear);

    props.onAddFilter(selectedYear);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={changeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;