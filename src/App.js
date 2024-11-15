import { useReducer } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import "./App.css";

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      return {
        expenses: [ action.expense, ...state.expenses,]
      };
    }
    case "DELETE": {
      return {
        expenses: state.expenses.filter((expense) => expense.id !== action.id),
      }
    }

    default: {
      return state;
    }
  }
}

function App() {
  // Remove the useState hook and replace it with useReducer hook
  // Implement the functionality to add and remove the transaction in reducer function
  // const [expenses, setExpenses] = useState([]);

  const [state, dispatch] = useReducer( reducer, {expenses: [] } );

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm onAddExpense={ (expense) => dispatch({ type: "ADD", expense }) } />
        <div className="expenseContainer">
          <ExpenseInfo expenses={state.expenses}  />
          <ExpenseList expenses={state.expenses} onDeleteExpense={ (id) => dispatch({ type: "DELETE", id})}
          />
        </div>
      </div>
    </>
  );
}

export default App;