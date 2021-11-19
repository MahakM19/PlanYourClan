import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';

/*const App = (props) => {
  function App() {
    const expenses = [
      {
        id: 'e1',
        title: 'Toilet paper',
        date: new Date(2020, 8, 13),
        amount: 94.12,
      },
      {
        id: 'e2',
        title: 'New TV',
        date: new Date(2021, 3, 11),
        amount: 799.49,
      },
      {
        id: 'e1',
        title: 'Car Insurance',
        date: new Date(2021, 3, 27),
        amount: 294.67,
      },
      {
        id: 'e1',
        title: 'New Desk',
        date: new Date(2021, 6, 11),
        amount: 450,
      }
    ]

    return React.createElement(
      'div',
      { className: App },
      React.createElement(Expenses, { items: expenses })
    );
  }*/
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet paper',
    date: new Date(2020, 8, 13),
    amount: 94.12,
  },
  {
    id: 'e2',
    title: 'New TV',
    date: new Date(2021, 3, 11),
    amount: 799.49,
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    date: new Date(2021, 3, 27),
    amount: 294.67,
  },
  {
    id: 'e4',
    title: 'New Desk',
    date: new Date(2021, 6, 11),
    amount: 450,
  }
];
function App() {


  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses( (prevExpenses) => {
        return [expense, ...prevExpenses];
      });
  };


  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
