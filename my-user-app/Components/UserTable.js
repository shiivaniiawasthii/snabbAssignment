import React, { useState } from "react";

const UserTable = ({ users }) => {
  const [searchText, setSearchText] = useState("");
  const [sortBy, setSortBy] = useState("name"); // Default sorting by name

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSortByEmail = () => {
    setSortBy("email");
  };

  const sortedUsers = filteredUsers.slice().sort((a, b) => {
    if (sortBy === "email") {
      return a.email.localeCompare(b.email);
    } else {
      return 0; // No sorting
    }
  });

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="mt-14">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Search by Name
        </label>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full border rounded-lg p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Sort by
        </label>
        <select
          value={sortBy}
          onChange={handleSortChange}
          className="w-full border rounded-lg p-2"
        >
          <option value="email">Email</option>
          <option value="name">Name</option>
          <option value="countryCode">Country Code</option>
        </select>
      </div>
      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Country Code</th>
            <th className="border p-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user, index) => (
            <tr key={index}>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.countryCode}</td>
              <td className="border p-2">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
