export default function ExpenseList({
  expenses,
  deleteExpense,
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">
        Expense List
      </h2>

      {expenses.map((expense) => (
        <div
          key={expense.id}
          className="border-b py-3 flex justify-between"
        >
          <div>
            <p className="font-semibold">
              ₹{expense.amount}
            </p>

            <p>{expense.category}</p>

            <p>{expense.note}</p>

            <small>{expense.date}</small>
          </div>

          <button
            onClick={() =>
              deleteExpense(expense.id)
            }
            className="text-red-500"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}