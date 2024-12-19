import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";

const Bookings = () => {
  const { user, setLoading } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  console.log(bookings);

  useEffect(() => {
    if (user) {
      axios
        .get(`http://localhost:3000/bookings?email=${user}`, {
          withCredentials: true,
        })
        .then((res) => {
          setBookings(res.data);
          // console.log(res.data)
        });
    }
  }, [user]);

  const handleDelete = (_id) => {
    console.log(_id);

    fetch(`http://localhost:3000/delete/${_id}`, {
      method: "POST",
    })
      .then((data) => data.json())
      .then((res) => {
        console.log(res);
        setBookings((prevData) => prevData.filter((item) => item._id !== _id));
      });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Service Name</th>
            <th>Job</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index}>
              <td>{booking.service}</td>
              <td>{booking.email}</td>
              <td>{booking.price}</td>
              <td>
                <button
                  onClick={() => handleDelete(booking._id)}
                  className="btn btn-circle btn-outline"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
