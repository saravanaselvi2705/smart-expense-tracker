import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { FiPieChart } from "react-icons/fi";

const CATEGORY_COLORS = {
  Food: "#10B981",
  Travel: "#F59E0B",
  Bills: "#EF4444",
  Others: "#8B5CF6",
};

const DEFAULT_COLORS = [
  "#6366F1",
  "#10B981",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900 text-white px-3.5 py-2 rounded-xl shadow-xl border border-slate-800 text-xs">
        <p className="font-semibold text-slate-300">{payload[0].name}</p>
        <p className="text-base font-extrabold text-indigo-400">
          ₹{payload[0].value}
        </p>
      </div>
    );
  }
  return null;
};

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

  const totalAmount = data.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <div className="bg-white border border-slate-200/80 shadow-sm shadow-slate-200/50 rounded-2xl p-6 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center font-bold text-lg border border-violet-100">
            <FiPieChart />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900 leading-tight">
              Expense Distribution
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              Category spending breakdown
            </p>
          </div>
        </div>

        {data.length > 0 ? (
          <div className="relative">
            <div className="h-64 w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="value"
                    innerRadius={65}
                    outerRadius={95}
                    paddingAngle={4}
                    stroke="none"
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={
                          CATEGORY_COLORS[entry.name] ||
                          DEFAULT_COLORS[index % DEFAULT_COLORS.length]
                        }
                      />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Category breakdown legend */}
            <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-slate-100">
              {data.map((item, index) => {
                const color =
                  CATEGORY_COLORS[item.name] ||
                  DEFAULT_COLORS[index % DEFAULT_COLORS.length];
                const percentage =
                  totalAmount > 0
                    ? Math.round((item.value / totalAmount) * 100)
                    : 0;

                return (
                  <div
                    key={item.name}
                    className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span
                        className="w-3 h-3 rounded-full shrink-0"
                        style={{ backgroundColor: color }}
                      />
                      <span className="text-xs font-semibold text-slate-700 truncate">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-slate-900 ml-1">
                      {percentage}%
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="h-64 flex flex-col items-center justify-center text-center p-6 bg-slate-50/50 rounded-xl border border-dashed border-slate-200 my-4">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center text-xl mb-3">
              <FiPieChart />
            </div>
            <p className="text-sm font-semibold text-slate-600">
              No Data to Display
            </p>
            <p className="text-xs text-slate-400 mt-1 max-w-xs">
              Add some expenses above to see your visual breakdown.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}