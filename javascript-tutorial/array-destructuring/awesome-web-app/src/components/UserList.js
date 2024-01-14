// src/components/UserList.js
import React, { useState } from 'react';

const UserList = ({ users, addUser }) => {
  const [newUser, setNewUser] = useState({ name: '', email: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleAddUser = () => {
    addUser(newUser);
    setNewUser({ name: '', email: '' });
  };

  return (
    <div>
      <h2>Awesome User List</h2>
      <ul>
        {users.map(({ id, name, email }) => (
          <li key={id}>{`${name} - ${email}`}</li>
        ))}
      </ul>
      <form>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={newUser.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={newUser.email}
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleAddUser}>
          Add User
        </button>
      </form>
    </div>
  );
};

export default UserList;
