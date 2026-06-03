import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
} from "recharts";

const COLORS = [
  "#6366F1",
  "#10B981",
  "#F59E0B",
  "#EF4444",
];

export default function ExpenseChart({
  expenses,
}) {
  const categoryTotals = {};

  expenses.forEach((expense) => {
    categoryTotals[expense.category] =
      (categoryTotals[
        expense.category
      ] || 0) + expense.amount;
  });

  const data = Object.keys(
    categoryTotals
  ).map((key) => ({
    name: key,
    value: categoryTotals[key],
  }));

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="font-bold mb-4">
        Expense Distribution
      </h2>

      <PieChart width={350} height={300}>
        <Pie
          data={data}
          dataKey="value"
          outerRadius={100}
        >
          {data.map((entry, index) => (
            <Cell
              key={index}
              fill={
                COLORS[
                  index % COLORS.length
                ]
              }
            />
          ))}
        </Pie>

        <Tooltip />
      </PieChart>
    </div>
  );
}