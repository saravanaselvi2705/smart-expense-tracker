import { FiCreditCard, FiCoffee, FiNavigation, FiFileText } from "react-icons/fi";

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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
      {/* Total Card */}
      <div className="bg-slate-900 border border-slate-800 text-white shadow-xl shadow-slate-900/10 rounded-2xl p-6 relative overflow-hidden group hover:border-indigo-500/50 transition-all duration-300">
        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl group-hover:bg-indigo-500/20 transition-all"></div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xl font-semibold border border-indigo-500/30">
            <FiCreditCard />
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
            Overall
          </span>
        </div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
          Total
        </h3>
        <p className="text-3xl font-extrabold text-white tracking-tight">
          ₹{total}
        </p>
      </div>

      {/* Food Card */}
      <div className="bg-white border border-slate-200/80 text-slate-800 shadow-sm shadow-slate-200/50 rounded-2xl p-6 relative overflow-hidden group hover:border-emerald-500/40 hover:shadow-md transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl font-semibold border border-emerald-100">
            <FiCoffee />
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
            Category
          </span>
        </div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
          Food
        </h3>
        <p className="text-3xl font-extrabold text-slate-900 tracking-tight">
          ₹{food}
        </p>
      </div>

      {/* Travel Card */}
      <div className="bg-white border border-slate-200/80 text-slate-800 shadow-sm shadow-slate-200/50 rounded-2xl p-6 relative overflow-hidden group hover:border-amber-500/40 hover:shadow-md transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl font-semibold border border-amber-100">
            <FiNavigation />
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
            Category
          </span>
        </div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
          Travel
        </h3>
        <p className="text-3xl font-extrabold text-slate-900 tracking-tight">
          ₹{travel}
        </p>
      </div>

      {/* Bills Card */}
      <div className="bg-white border border-slate-200/80 text-slate-800 shadow-sm shadow-slate-200/50 rounded-2xl p-6 relative overflow-hidden group hover:border-rose-500/40 hover:shadow-md transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center text-xl font-semibold border border-rose-100">
            <FiFileText />
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
            Category
          </span>
        </div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
          Bills
        </h3>
        <p className="text-3xl font-extrabold text-slate-900 tracking-tight">
          ₹{bills}
        </p>
      </div>
    </div>
  );
}