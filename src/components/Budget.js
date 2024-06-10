import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, expenses, currency, dispatch } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  //spent amount
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  const handleBudgetChange = (event) => {
    if (event.target.value < totalExpenses) {
      alert(
        "The value cannot be less than spent money, i.e., " +
          currency +
          totalExpenses
      );
      setNewBudget(totalExpenses);
      dispatch({ type: "SET_BUDGET", payload: totalExpenses });
    } else if (event.target.value > 20000) {
      alert("The value cannot exceed funds of " + currency + 20000);
      setNewBudget(20000);
      dispatch({ type: "SET_BUDGET", payload: 20000 });
    } else {
      setNewBudget(event.target.value);
      dispatch({ type: "SET_BUDGET", payload: event.target.value });
    }
  };

  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency}</span>
      <input
        className="px-2 ms-1 w-50"
        type="number"
        step="10"
        min={totalExpenses}
        max={20000}
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};
export default Budget;
