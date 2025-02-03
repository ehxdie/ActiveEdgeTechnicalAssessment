import React, { useState, useEffect } from 'react';
import { getUsers } from '../services/api';

export default function Card() {
  const [users, setUsers] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    city: '',
    phone: '',
  });

  // Fetch users on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  // Filter users based on input
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filterName.toLowerCase())
  );

  // Handle filter input change
  const handleFilterChange = (e) => {
    setFilterName(e.target.value);
  };

  // Handle new user input changes
  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  // Handle form submission to add a new user
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newUser.name || !newUser.email || !newUser.city || !newUser.phone) {
      alert("Please fill in all fields.");
      return;
    }

    // Create a new user object
    const addedUser = {
      id: users.length + 1, 
      name: newUser.name,
      email: newUser.email,
      address: { city: newUser.city }, // Match the existing user structure
      phone: newUser.phone,
    };

    // Update user list and reset form
    setUsers([...users, addedUser]);
    setNewUser({ name: '', email: '', city: '', phone: '' });
  };

  return (
    <div className="container">
      {/* Filter Input */}
      <div className="filter-container">
        <input
          type="text"
          placeholder="Filter by name..."
          value={filterName}
          onChange={handleFilterChange}
        />
      </div>

      {/* Display Cards */}
      <div className="cards-container">
        {filteredUsers.length === 0 ? (
          <p>No users found.</p>
        ) : (
          filteredUsers.map((user) => (
            <div key={user.id} className="card">
              <div className="card-name">Name: {user.name}</div>
              <div className="card-email">Email: {user.email}</div>
              <div className="card-address">City: {user.address.city}</div>
              <div className="card-phonenumber">Phone: {user.phone}</div>
            </div>
          ))
        )}
      </div>

      {/* Form to Add User */}
      <form className="user-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newUser.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newUser.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={newUser.city}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={newUser.phone}
          onChange={handleInputChange}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}
