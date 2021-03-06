import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpenseDate from './ExpenseDate'
import './Expense.css';
import './ExpenseList.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const Expense = ({ transactions }) => {
    const [expensesYear, setExpensesYear] = useState('2021');

    const onExpenseYearHandler = (chosenYear) => {
        setExpensesYear(chosenYear);
    };
    
    // const filterByYear = transactions.filter(item=>item.date.getFullYear() === expensesYear )
    return (
        <div className="expenses">
            {/* <ExpenseFilter selected={expensesYear} onchangeFilter={onExpenseYearHandler} /> */}
            <Card className="expenses">
                

                {transactions.map((transaction,i) => (
                    <ExpenseItem
                        key={i}
                        title={transaction.title}
                        amount={transaction.amount}
                        date={transaction.date}
                    />
                    // <Card className="expense-item" >
                    //     <div>{transaction.date.toISOString()}</div> 
                    //     <ExpenseDate date={transaction.date} />
                    //     <div className="expense-item__description">
                    //         <h2>{transaction.title}</h2>
                    //         <div className="expense-item__price" >${transaction.amount}</div>
                    //     </div>
                    // </Card>
                ))}

            </Card>
        </div>

    )
}

export default Expense;
