export default function SummaryCards({
  expenses,
}) {
  const total = expenses.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  return (
    <div className="grid md:grid-cols-4 gap-4">
      <div className="bg-indigo-500 text-white p-4 rounded-xl">
        <h3>Total Expenses</h3>
        <p className="text-2xl font-bold">
          ₹{total}
        </p>
      </div>
    </div>
  );
}