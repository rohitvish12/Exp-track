import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import './Expense.css';
import './ExpenseList.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const Expense = (props) => {
    const [expensesYear, setExpensesYear] = useState('2021');

    const onExpenseYearHandler = (chosenYear) => {
        setExpensesYear(chosenYear);
        // console.log(setExpensesYear);
    };
    const filterByYear = props.expenses.filter(item=>item.date.getFullYear() === expensesYear )
    return (
        <div className="expenses">
            <ExpenseFilter selected={expensesYear} onchangeFilter={onExpenseYearHandler} />
            <Card className="expenses">
                {filterByYear.length===0?<p className="expenses-list__fallback" >No expenses Found.</p>:filterByYear.map((e,i) => (                    
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