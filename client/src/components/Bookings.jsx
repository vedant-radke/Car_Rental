import React from 'react';

const Bookings = () => {
  const bookings = [
    { id: 1, car: 'Toyota Camry', date: '2024-09-20', status: 'Confirmed' },
    { id: 2, car: 'Honda Accord', date: '2024-09-21', status: 'Pending' },
    // Add more sample bookings as needed
  ];

  return (
    <div className="flex flex-col p-4 ml-64">
      <h1 className="text-2xl font-bold mb-4">Bookings</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">ID</th>
              <th className="border border-gray-300 p-2">Car</th>
              <th className="border border-gray-300 p-2">Date</th>
              <th className="border border-gray-300 p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 p-2">{booking.id}</td>
                <td className="border border-gray-300 p-2">{booking.car}</td>
                <td className="border border-gray-300 p-2">{booking.date}</td>
                <td className="border border-gray-300 p-2">{booking.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
