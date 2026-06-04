export default function Filters({
  search,
  setSearch,
  category,
  setCategory,
  minAmount,
  setMinAmount,
  maxAmount,
  setMaxAmount,
  fromDate,
  setFromDate,
  toDate,
  setToDate,
  sortBy,
  setSortBy,
}) {
  return (
    <div className="bg-white p-5 rounded-xl shadow mb-6">
      <h2 className="text-xl font-bold mb-4">
        Filters & Sorting
      </h2>

      <div className="grid md:grid-cols-3 gap-4">

        {/* Search */}
        <input
          type="text"
          placeholder="Search..."
          className="border p-3 rounded-lg"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        {/* Category */}
        <select
          className="border p-3 rounded-lg"
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >
          <option value="All">All Categories</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Bills">Bills</option>
          <option value="Others">Others</option>
        </select>

        {/* Sort */}
        <select
          className="border p-3 rounded-lg"
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value)
          }
        >
          <option value="recent">
            Most Recent
          </option>
          <option value="oldest">
            Oldest First
          </option>
          <option value="highest">
            Highest Amount
          </option>
          <option value="lowest">
            Lowest Amount
          </option>
        </select>

        {/* Min Amount */}
        <input
          type="number"
          placeholder="Min Amount"
          className="border p-3 rounded-lg"
          value={minAmount}
          onChange={(e) =>
            setMinAmount(e.target.value)
          }
        />

        {/* Max Amount */}
        <input
          type="number"
          placeholder="Max Amount"
          className="border p-3 rounded-lg"
          value={maxAmount}
          onChange={(e) =>
            setMaxAmount(e.target.value)
          }
        />

        {/* From Date */}
        <input
          type="date"
          className="border p-3 rounded-lg"
          value={fromDate}
          onChange={(e) =>
            setFromDate(e.target.value)
          }
        />

        {/* To Date */}
        <input
          type="date"
          className="border p-3 rounded-lg"
          value={toDate}
          onChange={(e) =>
            setToDate(e.target.value)
          }
        />

      </div>
    </div>
  );
}