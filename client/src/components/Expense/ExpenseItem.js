
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card';
const ExpenseItem = (props) => {
    const d = new Date(props.date);
    return(
        // <h2>Expense Item</h2>
        <Card className="expense-item" >
            {/* <div>{props.date.toISOString()}</div>  */}
            {/* {console.log(props.date)}
            {console.log(new Date(d))} */}
            <ExpenseDate date={d} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price" >${props.amount}</div>
            </div>
        </Card>        
    )
}

export default ExpenseItem;