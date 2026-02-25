import React, { useRef, useState } from "react";

const users = [
  { id: 1, name: "Ravi", dept: "IT" },
  { id: 2, name: "Amit", dept: "HR" },
  { id: 3, name: "Neha", dept: "Sales" },
  { id: 4, name: "Priya", dept: "IT" },
  { id: 5, name: "Karan", dept: "Finance" },
  { id: 6, name: "Simran", dept: "Marketing" },
  { id: 7, name: "Vikram", dept: "IT" },
  { id: 8, name: "Anjali", dept: "HR" },
  { id: 9, name: "Rahul", dept: "Sales" },
  { id: 10, name: "Meena", dept: "Finance" },
  { id: 11, name: "Arjun", dept: "IT" },
  { id: 12, name: "Pooja", dept: "Marketing" },
  { id: 13, name: "Suresh", dept: "HR" },
  { id: 14, name: "Divya", dept: "Sales" },
  { id: 15, name: "Manoj", dept: "Finance" },
  { id: 16, name: "Sneha", dept: "IT" },
  { id: 17, name: "Rohit", dept: "Marketing" },
  { id: 18, name: "Kavita", dept: "HR" },
  { id: 19, name: "Nikhil", dept: "Sales" },
  { id: 20, name: "Shreya", dept: "Finance" }
];

const App = () => {
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const [activeId, setActiveId] = useState(null);

  const handleSearch = () => {
    const value = inputRef.current.value.toLowerCase();

    const found = users.find(user =>
      user.name.toLowerCase().includes(value)
    );

    if (!found) return;

    setActiveId(found.id);

    const element = containerRef.current.querySelector(
      `#user-${found.id}`
    );

    element?.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <div className="flex gap-2 mb-4">
        <input
          ref={inputRef}
          className="border px-3 py-2 rounded w-full"
          placeholder="Search Name"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 rounded"
        >
          OK
        </button>
      </div>

      <div
        ref={containerRef}
        className="space-y-4 max-h-75 overflow-y-auto"
      >
        {users.map(user => (
          <div
            key={user.id}
            id={`user-${user.id}`}
            className={`p-5 border rounded transition
              ${
                activeId === user.id
                  ? "bg-blue-100 border-blue-400"
                  : "hover:bg-gray-50"
              }`}
          >
            <h4 className="font-semibold">{user.name}</h4>
            <p className="text-sm text-gray-500">{user.dept}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;