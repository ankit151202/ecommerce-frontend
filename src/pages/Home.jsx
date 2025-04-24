import React from 'react';
import { motion } from 'framer-motion';

const vehicles = [
  {
    id: 1,
    name: 'Honda Civic 2015',
    condition: 'Good',
    image: 'https://images.unsplash.com/photo-1615201102715-c45b7f9ed3bc?auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 2,
    name: 'Toyota Fortuner 2018',
    condition: 'Excellent',
    image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 3,
    name: 'Maruti Swift 2012',
    condition: 'Fair',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60'
  }
];

const Home = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-100 via-white to-blue-100 py-12 text-center">
        <h2 className="text-5xl font-bold text-blue-700">Exchange your Old with New 🚘</h2>
        <p className="text-lg text-gray-700 mt-2">Exchange your old vehicle for something fresh and new.</p>
      </section>

      <section className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 bg-gray-50">
        {vehicles.map(vehicle => (
          <motion.div
            key={vehicle.id}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-xl shadow-lg transition overflow-hidden"
          >
            <img
              src={vehicle.image}
              alt={vehicle.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-800">{vehicle.name}</h3>
              <p className="text-gray-500 mb-3">Condition: {vehicle.condition}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Exchange Now
              </button>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Home;
