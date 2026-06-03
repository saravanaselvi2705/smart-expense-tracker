import { useEffect, useState } from "react";

import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseChart from "./components/ExpenseChart";
import SummaryCards from "./components/SummaryCards";
import Filters from "./components/ Filters";

import {
  getExpenses,
  saveExpenses,
} from "./utils/localStorage";

export default function App() {
  const [expenses, setExpenses] =
    useState(getExpenses());

  const [search, setSearch] =
    useState("");

  useEffect(() => {
    saveExpenses(expenses);
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([
      expense,
      ...expenses,
    ]);
  };

  const deleteExpense = (id) => {
    setExpenses(
      expenses.filter(
        (expense) =>
          expense.id !== id
      )
    );
  };

  const filteredExpenses =
    expenses.filter(
      (expense) =>
        expense.note
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        expense.category
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
    );

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-4xl font-bold text-center mb-6">
        Smart Expense Tracker
      </h1>

      <SummaryCards
        expenses={expenses}
      />

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <ExpenseForm
          addExpense={addExpense}
        />

        <ExpenseChart
          expenses={expenses}
        />
      </div>

      <div className="mt-6">
        <Filters
          search={search}
          setSearch={setSearch}
        />
      </div>

      <div className="mt-6">
        <ExpenseList
          expenses={filteredExpenses}
          deleteExpense={
            deleteExpense
          }
        />
      </div>
    </div>
  );
}