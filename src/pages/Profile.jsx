import React from 'react';

const Profile = () => {
  // Dummy profile data
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    address: '123 Market Street, NY'
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold">Profile</h2>
      <div className="mt-2">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Address:</strong> {user.address}</p>
      </div>
    </div>
  );
};

export default Profile;
