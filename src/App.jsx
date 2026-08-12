import { useEffect, useState } from "react";
import { FiTrendingUp } from "react-icons/fi";

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
    <div className="min-h-screen bg-slate-50 relative overflow-hidden text-slate-900 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-violet-200/30 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Navbar */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/80 sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-600 text-white flex items-center justify-center text-xl font-bold shadow-md shadow-indigo-500/20">
              <FiTrendingUp />
            </div>
            <div>
              <h1 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                Smart Expense Tracker
                <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100 hidden sm:inline-block">
                  PRO
                </span>
              </h1>
              <p className="text-xs text-slate-500 font-medium">
                Financial Insights & Budget Management
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 border border-slate-200/80 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Live Storage
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10 space-y-8">
        <SummaryCards expenses={expenses} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ExpenseForm addExpense={addExpense} />
          <ExpenseChart expenses={expenses} />
        </div>

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

        <ExpenseList
          expenses={filteredExpenses}
          deleteExpense={deleteExpense}
        />
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-slate-200/80 py-6 text-center text-xs text-slate-400 font-medium">
        Smart Expense Tracker • Professional Financial Management
      </footer>
    </div>
  );
}