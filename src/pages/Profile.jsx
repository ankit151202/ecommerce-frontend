import React from 'react';

const Profile = () => {
  const user = {
    name: "Ankit Seth",
    email: "ankit@example.com",
    vehicle: "Hyundai i20 2017",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg"
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6 text-center">
        <img
          src={user.avatar}
          alt="user"
          className="mx-auto h-24 w-24 rounded-full mb-4"
        />
        <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>
        <div className="mt-4">
          <span className="text-gray-700 font-semibold">Current Vehicle:</span>
          <p className="text-blue-600">{user.vehicle}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
