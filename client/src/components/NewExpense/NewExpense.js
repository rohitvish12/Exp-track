import React, { useState} from 'react';
import './NewExpense.css';

import ExpenseForm from './ExpenseForm';
import { AddTransaction } from '../../service/api';

const NewExpense = (props) => {
    const [isEdit, setIsEdit] = useState(false);
    const saveExpenseDataHandler = async (enteredExpenseData) => {
        const expenseData ={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);

        
        const NewExpense = await AddTransaction(expenseData);
        console.log(NewExpense);
        setIsEdit(false);
    }
    const editingHandler = () =>{
        setIsEdit(true);
    }
    const stopEditingHandler = () => {
        setIsEdit(false);
    }
    return(
        <div className="new-expense" >
            {!isEdit && (<button onClick={editingHandler}>Add New Expense</button>)}
            {isEdit && (<ExpenseForm onClick={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />)}
        </div>
    )
}

export default NewExpense;