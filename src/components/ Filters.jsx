export default function Filters({
  search,
  setSearch,
}) {
  return (
    <input
      type="text"
      placeholder="Search..."
      className="w-full border p-2 rounded"
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
    />
  );
}