import {useState} from 'react';
import Expenses from './components/Expense/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_DATA = [
  {
    id: '1',
    title: 'Watch',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: '2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12) 
  },
  {
    id: '3',
    title: 'New Tab',
    amount: 594.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: '4',
    title: 'Mobile Phone',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  
  const [expenses, setExpenses] = useState(DUMMY_DATA)

  const addExpenseHandler = (expense) => {
    setExpenses( (preExpenses => {
      return[expense, ...preExpenses]
    }) )

  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;