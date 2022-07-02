import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

import './Expenses.css';

function Expenses(props) {
  const addFilterHandler = (selectedYear) => {
    const yearFilter = selectedYear;
    console.log(yearFilter);
  };

  return (
    <div>
      <Card className="expenses"> {/* 소문자로 시작=내장 요소로 인식 */}
      <ExpensesFilter onAddFilter={addFilterHandler} />
        <ExpenseItem
          title={props.items[0].title} 
          amount={props.items[0].amount}
          date={props.items[0].date} 
        /> {/* 대문자로 시작=커스텀한 요소=사용자 지정 컴포넌트로 인식 */}
        <ExpenseItem
          title={props.items[1].title} 
          amount={props.items[1].amount}
          date={props.items[1].date} 
        />
        <ExpenseItem
          title={props.items[2].title} 
          amount={props.items[2].amount}
          date={props.items[2].date} 
        />
        <ExpenseItem
          title={props.items[3].title} 
          amount={props.items[3].amount}
          date={props.items[3].date} 
        />
      </Card>
    </div>
  );
}

export default Expenses