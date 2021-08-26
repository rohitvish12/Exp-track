import ExpenseItem from "./ExpenseItem";
import './Expense.css';
import Card from "./Card";


const Expense = (props) => {
    return (
        <Card className="expenses">
            {props.expenses.map((e) =>(
                <ExpenseItem
                    title={e.title}
                    amount={e.amount}
                    date={e.date}
                />
            ))}
        </Card>
    )
}

export default Expense;