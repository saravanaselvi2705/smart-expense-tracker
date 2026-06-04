export default function SummaryCards({
  expenses,
}) {
  const total = expenses.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  const food = expenses
    .filter(
      (item) =>
        item.category === "Food"
    )
    .reduce(
      (sum, item) =>
        sum + item.amount,
      0
    );

  const travel = expenses
    .filter(
      (item) =>
        item.category === "Travel"
    )
    .reduce(
      (sum, item) =>
        sum + item.amount,
      0
    );

  const bills = expenses
    .filter(
      (item) =>
        item.category === "Bills"
    )
    .reduce(
      (sum, item) =>
        sum + item.amount,
      0
    );

  return (
    <div className="grid md:grid-cols-4 gap-4 mb-6">
      <div className="bg-indigo-600 text-white p-5 rounded-xl">
        <h3>Total</h3>
        <p>₹{total}</p>
      </div>

      <div className="bg-green-500 text-white p-5 rounded-xl">
        <h3>Food</h3>
        <p>₹{food}</p>
      </div>

      <div className="bg-yellow-500 text-white p-5 rounded-xl">
        <h3>Travel</h3>
        <p>₹{travel}</p>
      </div>

      <div className="bg-red-500 text-white p-5 rounded-xl">
        <h3>Bills</h3>
        <p>₹{bills}</p>
      </div>
    </div>
  );
}