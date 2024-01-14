// src/App.js
import React, { useState } from 'react';
import UserList from './components/UserList';

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    // Add more users as needed
  ]);

  const addUser = (newUser) => {
    // Generate a unique ID (replace with a more robust solution if needed)
    const newUserId = Math.max(...users.map((user) => user.id), 0) + 1;

    // Add the new user to the list
    setUsers([...users, { id: newUserId, ...newUser }]);
  };

  return (
    <div>
      <h1>Welcome to My Awesome Web App</h1>
      <UserList users={users} addUser={addUser} />
    </div>
  );
};

export default App;
