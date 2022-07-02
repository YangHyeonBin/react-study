// 비용 쓴 날짜를 화면에 렌더링하는 컴포넌트
import './ExpenseDate.css';

function ExpenseDate(props) {
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString('ko-KR', { month: 'long' });
  const day = props.date.toLocaleString('ko-KR', { day: '2-digit' });
  
  return (
    <div className="expense-date">
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;