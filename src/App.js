import React, { useState } from "react";
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const INITIAL_EXPENSES = [
  {title: "Car Insurance", amount: 340.5, date: new Date(2021, 2, 28) },
  {title: "Cat Food", amount: 3.5, date: new Date(2020, 2, 15) },
  {title: "Makeup", amount: 73.5, date: new Date(2019, 2, 14) },
  {title: "Groceries", amount: 22.5, date: new Date(2021, 2, 11) },
];

const App = () => {

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
    <NewExpense onAddExpense={addExpenseHandler}/>
    <Expenses items={expenses}/>
    </div>
  );

  };

export default App;
