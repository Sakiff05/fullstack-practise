import { useState } from "react";

function Search({ tempData, setData }) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");

  function handleSearch(e) {
    const value = e.target.value;
    setQuery(value);
    setData(
      [...tempData].filter((data) =>
        data.title.toLowerCase().includes(value.toLowerCase())
      )
    );
  }

  function handleSort(e) {
    const value = e.target.value;
    if (value == "default") {
      setQuery("");
      setData([...tempData]);
    } else {
      const sortedData = [...tempData].toSorted((a, b) =>
        a.title.localeCompare(b.title)
      );
      setQuery("");
      setData(sortedData);
    }
  }

  return (
    <div className="flex items-center justify-center gap-20">
      <input
        type="text"
        className="border-2 border-rose-500 rounded p-2 outline-none"
        placeholder="Search by name..."
        value={query}
        onChange={(e) => handleSearch(e)}
      />
      <select
        className="border-2 border-rose-500 rounded p-2 outline-none"
        onChange={(e) => handleSort(e)}
      >
        <option value="default">Default</option>
        <option value="sorted">Sort by name</option>
      </select>
    </div>
  );
}

export default Search;
