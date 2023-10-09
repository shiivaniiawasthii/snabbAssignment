import React from "react";

function UserForm({ onSubmit }) {
  const [name, setName] = React.useState("");
  const [countryCode, setCountryCode] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, countryCode, email, password });
    setName("");
    setCountryCode("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 shadow-lg">
      <form onSubmit={handleSubmit}>
        <div>
          <label className="p-2" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full black border p-2 m-4"
          />
        </div>
        <div>
          <label htmlFor="countryCode">Country Code:</label>
          <input
            type="text"
            id="countryCode"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="w-full black border p-2 m-4"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full black border p-2 m-4"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full black border p-2 m-4"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-6 rounded m-4"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default UserForm;
