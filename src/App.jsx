import { useEffect, useState } from "react";

import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseChart from "./components/ExpenseChart";
import SummaryCards from "./components/SummaryCards";
import Filters from "./components/Filters";

import {
  getExpenses,
  saveExpenses,
} from "./utils/localStorage";

export default function App() {
  const [expenses, setExpenses] = useState(
    getExpenses()
  );

  const [search, setSearch] = useState("");

  const [category, setCategory] =
    useState("All");

  const [minAmount, setMinAmount] =
    useState("");

  const [maxAmount, setMaxAmount] =
    useState("");

  const [fromDate, setFromDate] =
    useState("");

  const [toDate, setToDate] =
    useState("");

  const [sortBy, setSortBy] =
    useState("recent");

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

  let filteredExpenses = [...expenses];

  // Search
  filteredExpenses =
    filteredExpenses.filter(
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

  // Category Filter
  if (category !== "All") {
    filteredExpenses =
      filteredExpenses.filter(
        (expense) =>
          expense.category === category
      );
  }

  // Amount Range Filter
  if (minAmount) {
    filteredExpenses =
      filteredExpenses.filter(
        (expense) =>
          expense.amount >=
          Number(minAmount)
      );
  }

  if (maxAmount) {
    filteredExpenses =
      filteredExpenses.filter(
        (expense) =>
          expense.amount <=
          Number(maxAmount)
      );
  }

  // Date Range Filter
  if (fromDate) {
    filteredExpenses =
      filteredExpenses.filter(
        (expense) =>
          expense.date >= fromDate
      );
  }

  if (toDate) {
    filteredExpenses =
      filteredExpenses.filter(
        (expense) =>
          expense.date <= toDate
      );
  }

  // Sorting
  if (sortBy === "highest") {
    filteredExpenses.sort(
      (a, b) =>
        b.amount - a.amount
    );
  }

  if (sortBy === "lowest") {
    filteredExpenses.sort(
      (a, b) =>
        a.amount - b.amount
    );
  }

  if (sortBy === "recent") {
    filteredExpenses.sort(
      (a, b) =>
        new Date(b.date) -
        new Date(a.date)
    );
  }

  if (sortBy === "oldest") {
    filteredExpenses.sort(
      (a, b) =>
        new Date(a.date) -
        new Date(b.date)
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-indigo-100 p-6">
      <h1 className="text-5xl font-extrabold text-center mb-8 text-slate-800">
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
          category={category}
          setCategory={setCategory}
          minAmount={minAmount}
          setMinAmount={setMinAmount}
          maxAmount={maxAmount}
          setMaxAmount={setMaxAmount}
          fromDate={fromDate}
          setFromDate={setFromDate}
          toDate={toDate}
          setToDate={setToDate}
          sortBy={sortBy}
          setSortBy={setSortBy}
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