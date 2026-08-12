import {
  FiList,
  FiTrash2,
  FiCoffee,
  FiNavigation,
  FiFileText,
  FiTag,
  FiCalendar,
  FiInbox,
} from "react-icons/fi";

const getCategoryConfig = (cat) => {
  switch (cat) {
    case "Food":
      return {
        icon: <FiCoffee />,
        badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
        iconBg: "bg-emerald-100 text-emerald-700",
      };
    case "Travel":
      return {
        icon: <FiNavigation />,
        badge: "bg-amber-50 text-amber-700 border-amber-200",
        iconBg: "bg-amber-100 text-amber-700",
      };
    case "Bills":
      return {
        icon: <FiFileText />,
        badge: "bg-rose-50 text-rose-700 border-rose-200",
        iconBg: "bg-rose-100 text-rose-700",
      };
    default:
      return {
        icon: <FiTag />,
        badge: "bg-violet-50 text-violet-700 border-violet-200",
        iconBg: "bg-violet-100 text-violet-700",
      };
  }
};

export default function ExpenseList({
  expenses,
  deleteExpense,
}) {
  return (
    <div className="bg-white border border-slate-200/80 shadow-sm shadow-slate-200/50 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-lg border border-indigo-100">
            <FiList />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900 leading-tight">
              Expense List
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              Detailed history of your transactions
            </p>
          </div>
        </div>

        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
          {expenses.length} {expenses.length === 1 ? "record" : "records"}
        </span>
      </div>

      {expenses.length > 0 ? (
        <div className="space-y-3">
          {expenses.map((expense) => {
            const config = getCategoryConfig(expense.category);

            return (
              <div
                key={expense.id}
                className="p-4 rounded-xl border border-slate-200/70 hover:border-slate-300 bg-slate-50/40 hover:bg-slate-50 transition-all duration-200 flex items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center text-lg shrink-0 ${config.iconBg}`}
                  >
                    {config.icon}
                  </div>

                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <p className="font-extrabold text-slate-900 text-base">
                        ₹{expense.amount}
                      </p>

                      <span
                        className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${config.badge}`}
                      >
                        {expense.category}
                      </span>
                    </div>

                    {expense.note && (
                      <p className="text-sm font-medium text-slate-700 truncate">
                        {expense.note}
                      </p>
                    )}

                    {expense.date && (
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                        <FiCalendar className="text-slate-400 shrink-0" />
                        <small className="text-xs text-slate-500 font-medium">{expense.date}</small>
                      </div>
                    )}
                  </div>
                </div>

                <button
                  onClick={() =>
                    deleteExpense(expense.id)
                  }
                  className="hover:bg-rose-50 text-rose-500 hover:text-rose-600 p-2.5 rounded-xl border border-transparent hover:border-rose-200 transition-all duration-200 cursor-pointer flex items-center gap-1.5 text-xs font-semibold shrink-0"
                  title="Delete Expense"
                >
                  <FiTrash2 className="text-sm" />
                  <span>Delete</span>
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="py-12 text-center flex flex-col items-center justify-center bg-slate-50/50 rounded-xl border border-dashed border-slate-200">
          <div className="w-14 h-14 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center text-2xl mb-3">
            <FiInbox />
          </div>
          <h3 className="text-base font-bold text-slate-700">
            No Expenses Found
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-sm">
            No transactions match your criteria. Add a new expense or clear your filters to view entries.
          </p>
        </div>
      )}
    </div>
  );
}