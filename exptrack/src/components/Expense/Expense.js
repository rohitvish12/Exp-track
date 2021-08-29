import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import './Expense.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const Expense = (props) => {
    const [expensesYear, setExpensesYear] = useState('2020');

    const onExpenseYearHandler = (chosenYear) => {
        setExpensesYear(chosenYear);
        console.log(setExpensesYear);
    };

    // const expense_items = props.expenses.map((expense, i) => {
    //     return (
    //         <ExpenseItem
    //             key={i}
    //             date={expense.date}
    //             amount={expense.amount}
    //             title={expense.title}
    //         />
    //     );
    // });

    // selected={expensesYear} onChangeFilter={onExpenseYearChanged}
    return (
        <div className="expenses">
            <ExpenseFilter selected={expensesYear} onchangeFilter={onExpenseYearHandler} />
            <Card className="expenses">
                {props.expenses.map((e,i) => (
                    <ExpenseItem
                        key={i}
                        title={e.title}
                        amount={e.amount}
                        date={e.date}
                    />
                ))}
            </Card>
        </div>

    )
}

export default Expense;