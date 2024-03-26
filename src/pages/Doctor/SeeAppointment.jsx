import React from "react";

const SeeAppointment = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Gender</th>
              <th className="py-2 px-4 border-b">Payment</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Booked On</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">
                <div className="flex items-center">
                  <img
                    className="w-8 h-8 rounded-full mr-2"
                    src="https://placekitten.com/40/40"
                    alt="Profile"
                  />
                  <div>
                    <p className="font-bold">John Doe</p>
                    <p className="text-gray-500">john.doe@gmail.com</p>
                  </div>
                </div>
              </td>
              <td className="py-2 px-4 border-b text-center">Male</td>
              <td className="py-2 px-4 border-b">Credit Card</td>
              <td className="py-2 px-4 border-b">Paid</td>
              <td className="py-2 px-4 border-b">2024-01-24</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SeeAppointment;
