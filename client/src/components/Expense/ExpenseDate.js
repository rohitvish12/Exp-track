
import './ExpenseDate.css';

const ExpenseDate = (props) => {
    // console.log(props.date.getFullYear());
    const month = props.date.toLocaleString('en-US', {month:'long'});
    const day = props.date.toLocaleString('en-US', {day:'2-digit'});
    const year = props.date.getUTCFullYear();

    return (
        <div className='expense-date'>
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    )
}

export default ExpenseDate;