import React, { useState } from "react";
import UserForm from "../Components/UserForm";
import UserTable from "../Components/UserTable";

const Home = () => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div className="container mx-auto p-14 flex justify-center">
      {/* Left Half (Form) */}
      <div className="w-1/2 mr-4">
        <h1 className="text-4xl font-bold mb-4 text-center"></h1>
        <UserForm onSubmit={addUser} />
      </div>

      {/* Right Half (Table) */}
      <div className="w-1/2 ml-4">
        <UserTable users={users} />
      </div>
    </div>
  );
};

export default Home;
