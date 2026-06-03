import { useState } from "react";

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
      className="bg-white p-6 rounded-xl shadow"
    >
      <h2 className="text-xl font-bold mb-4">
        Add Expense
      </h2>

      <input
        type="number"
        placeholder="Amount"
        className="w-full border p-2 mb-3"
        value={form.amount}
        onChange={(e) =>
          setForm({
            ...form,
            amount: e.target.value,
          })
        }
      />

      <select
        className="w-full border p-2 mb-3"
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

      <input
        type="date"
        className="w-full border p-2 mb-3"
        value={form.date}
        onChange={(e) =>
          setForm({
            ...form,
            date: e.target.value,
          })
        }
      />

      <input
        type="text"
        placeholder="Note"
        className="w-full border p-2 mb-3"
        value={form.note}
        onChange={(e) =>
          setForm({
            ...form,
            note: e.target.value,
          })
        }
      />

      <button
        className="bg-indigo-600 text-white px-4 py-2 rounded"
      >
        Add Expense
      </button>
    </form>
  );
}