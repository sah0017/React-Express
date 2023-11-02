import logo from './logo.svg';
import React, {useEffect, useState} from "react";
import './App.css';

function App() {
  const [users,setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
    .then((res) => res.json())
    .then((data) => setUsers(data))
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Users</h1>
        {users?.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </header>
    </div>
  );
}

export default App;
