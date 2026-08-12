import { useState } from "react";
import { FiPlus, FiDollarSign, FiTag, FiCalendar, FiFileText } from "react-icons/fi";

const categories = [
  "Food",
  "Travel",
  "Bills",
  "Others",
];

export default function ExpenseForm({
  addExpense,
}) {
  const [form, setForm] = useState({
    amount: "",
    category: "Food",
    date: "",
    note: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    addExpense({
      id: Date.now(),
      ...form,
      amount: Number(form.amount),
    });

    setForm({
      amount: "",
      category: "Food",
      date: "",
      note: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-slate-200/80 shadow-sm shadow-slate-200/50 rounded-2xl p-6 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-lg border border-indigo-100">
            <FiPlus />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900 leading-tight">
              Add Expense
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              Record a new transaction
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {/* Amount */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
              Amount (₹)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 text-sm">
                <FiDollarSign />
              </div>
              <input
                type="number"
                placeholder="Amount"
                className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium text-sm"
                value={form.amount}
                onChange={(e) =>
                  setForm({
                    ...form,
                    amount: e.target.value,
                  })
                }
                required
              />
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
              Category
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 text-sm">
                <FiTag />
              </div>
              <select
                className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium text-sm cursor-pointer appearance-none"
                value={form.category}
                onChange={(e) =>
                  setForm({
                    ...form,
                    category: e.target.value,
                  })
                }
              >
                {categories.map((cat) => (
                  <option key={cat}>{cat}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400 text-xs">
                ▼
              </div>
            </div>
          </div>

          {/* Date */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
              Date
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 text-sm">
                <FiCalendar />
              </div>
              <input
                type="date"
                className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium text-sm"
                value={form.date}
                onChange={(e) =>
                  setForm({
                    ...form,
                    date: e.target.value,
                  })
                }
              />
            </div>
          </div>

          {/* Note */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
              Note
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 text-sm">
                <FiFileText />
              </div>
              <input
                type="text"
                placeholder="Note"
                className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium text-sm"
                value={form.note}
                onChange={(e) =>
                  setForm({
                    ...form,
                    note: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>
      </div>

      <button
        className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold py-3 px-4 rounded-xl shadow-md shadow-indigo-600/20 hover:shadow-lg hover:shadow-indigo-600/30 transition-all cursor-pointer flex items-center justify-center gap-2 text-sm"
      >
        <FiPlus className="text-base" />
        Add Expense
      </button>
    </form>
  );
}