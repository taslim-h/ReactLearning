import { useState } from "react";
import Form from "./components/Form";
import ExpenseList from "./expense-tracker/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/categories";

function App() {
  const [selectedCatrgory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "a", amount: 10, category: "Utilities" },
    { id: 2, description: "b", amount: 10, category: "Utilities" },
    { id: 3, description: "c", amount: 10, category: "Utilities" },
    { id: 4, description: "d", amount: 10, category: "Utilities" },
  ]);

  const visibleExpenses =
    selectedCatrgory && selectedCatrgory !== "All categories"
      ? expenses.filter((e) => e.category === selectedCatrgory)
      : expenses;

  return (
    <>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>

      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <div>
        <ExpenseList
          expenses={visibleExpenses}
          onDelete={(id) => setExpenses(expenses.filter((e) => e.id != id))}
        />
      </div>
    </>
  );
}

export default App;
