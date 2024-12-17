import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Bookings = () => {
  const { user, setLoading } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:3000/bookings?email=${user}`)
        .then((res) => res.json())
        .then((data) => {
          setBookings(data);
          // console.log(bookings);
        })
        .catch((error) => {
          console.error('Error fetching bookings:', error);
        });
    }
  }, [user]);


  const handleDelete =(_id)=>{
    console.log(_id)

    fetch(`http://localhost:3000/delete/${_id}`,{
      method:"POST"
    })
    .then(data=>data.json())
    .then(res=>{
      console.log(res)
      setBookings(prevData=> prevData.filter(item => item._id !== _id));


    }
  
  )
  }

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
            <tr key={index} >
              <td>{booking.service}</td>
              <td>{booking.email}</td> {/* Replace booking.date with the actual field */}
              <td>{booking.price}</td>
              <button onClick={()=>handleDelete(booking._id)} className="btn btn-circle btn-outline">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>
            </tr>
          ))}

      
      
 
    </tbody>
  </table>
</div>
    // <div>

      
    //   {bookings.length > 0 ? (
    //     <table border="1" style={{ borderCollapse: 'collapse' ,margin:'10px', width:'100%'}}>
        
    //         <tr>
    //           <th style={styles.header}>Title</th>
    //           <th style={styles.header}>email</th>
    //           <th style={styles.header}>Price</th>
    //         </tr>
         
    //       <tbody>
    //         {bookings.map((booking, index) => (
    //           <tr key={index} >
    //             <td>{booking.service}</td>
    //             <td>{booking.email}</td> {/* Replace booking.date with the actual field */}
    //             <td>{booking.price}</td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   ) : (
    //     <p>No bookings available</p>
    //   )}
    // </div>



  );
};

// Custom styles for the table headers
const styles = {
  header: {
    backgroundColor: '#4CAF50', // Green background
    color: 'white',  // White text color
    padding: '10px', // Padding for spacing
    textAlign: 'center',  // Center the text
    fontWeight: 'bold',  // Bold font
  },
};

export default Bookings;
