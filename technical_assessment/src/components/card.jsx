import React, { useState, useEffect } from 'react';
import { getUsers } from '../services/api'



export default function Card() {
  const [users, setUsers] = useState([]); 
  const [filterName, setFilterName] = useState('');

  console.log(users);
  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);  
    };
    fetchUsers();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  }

  return (
    <div className="cards-container">

      {users.map((user) => (
          <div key={user.id} className="card">
            <div className="card-name">Name: {user.name}</div>
            <div className="card-email">Email: {user.email}</div>
            <div className="card-address">City: {user.address.city}</div>
            <div className="card-phonenumber">Phone number: {user.phone}</div>
          </div>
        ))
      }

      <form onSubmit={handleSubmit}>
          <label htmlFor="Name"></label>
          <input 
          type='text' 
          placeholder='Name'/>
          <button type='submit'>Submit</button>
      </form>

    </div>

  
  )
}
