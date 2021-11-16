import { useState } from 'react';
import ExpenseFrom from './ExpenseForm'; 
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };
    
    const setIsEditingHandler = () => {
        setIsEditing(true);
    };

    const exitEditingHandler = () => {
        setIsEditing(false);
    };

    return ( 
    <div className="new-expense">
        {!isEditing && <button onClick={setIsEditingHandler}>Add new expense</button>}
        {isEditing && <ExpenseFrom onSaveExpenseData={saveExpenseDataHandler} onCancel={exitEditingHandler} />}
    </div>
    );
};

export default NewExpense;