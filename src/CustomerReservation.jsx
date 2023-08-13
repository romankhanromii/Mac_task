// import React, { useState } from "react";
// import axios from "axios";
// import './customer.css'

// const CustomerReservationFlow = () => {
//   const [customer, setCustomer] = useState({});
//   const [reservations, setReservations] = useState([]);
//   const [reservationDate, setReservationDate] = useState("");
//   const [reservationTime, setReservationTime] = useState("");
//   const [partySize, setPartySize] = useState(1); // Default party size

//   const handleCreateCustomer = (event) => {
//     event.preventDefault();

//     axios.post("http://localhost:8080/users/login", customer)
//       .then((response) => {
//         if (response.status === 200) {
//           setCustomer(response.data);
//         } else {
//           console.log("Customer creation failed");
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const handleCreateReservation = (event) => {
//     event.preventDefault();

//     axios.post("http://localhost:8080/users/login", {
//       customerId: customer.id,
//       reservationDate,
//       reservationTime,
//       partySize,
//     })
//       .then((response) => {
//         if (response.status === 200) {
//           setReservations([...reservations, response.data]);
//         } else {
//           console.log("Reservation creation failed");
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div>
//       <h1>Customer and Reservation Flow</h1>
//       {/* Implement your tabs here */}
//       <div>
//         {/* Customer Form */}
//         <form onSubmit={handleCreateCustomer}>
//           {/* Input fields for first name, last name, email */}
//           <button type="submit">Create Customer</button>
//         </form>
//       </div>
//       <div>
//         {/* Reservations */}
//         {/* Display reservations */}
//         <form onSubmit={handleCreateReservation}>
//           <input type="hidden" value={customer.id} />
//           {/* Input fields for reservation date, time, party size */}
//           <button type="submit">Create Reservation</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CustomerReservationFlow;
import React, { useState } from "react";
import axios from "axios";
import './customer.css'

const CustomerReservationFlow = () => {
  const [customer, setCustomer] = useState({
    name: "",
    number: "",
    city: "",
    status: "",
    country: "",
  });
  const [reservations, setReservations] = useState([]);
  const [reservationDate, setReservationDate] = useState("");
  const [reservationTime, setReservationTime] = useState("");
  const [partySize, setPartySize] = useState(1); // Default party size

  const handleCreateCustomer = (event) => {
    event.preventDefault();
  
    console.log("Before setting customer:", customer);
  
    axios.post("https://64d891295f9bf5b879ce59c0.mockapi.io/Customer", customer)
      .then((response) => {
        if (response.status === 200) {
          setCustomer(response);
        } else {
          console.log("Customer creation failed");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    
    console.log("After setting customer:", customer);
  };

  const handleCreateReservation = (event) => {
    event.preventDefault();

    axios.post("https://64d891295f9bf5b879ce59c0.mockapi.io/reservation", {
      customerId: customer.id,
      reservationDate,
      reservationTime,
      partySize,
    })
      .then((response) => {
        if (response.status === 200) {
          setReservations([...reservations, response.data]);
        } else {
          console.log("Reservation creation failed");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Customer and Reservation Flow</h1>
      {/* Implement your tabs here */}
      <div>
        {/* Customer Form */}
        <form onSubmit={handleCreateCustomer}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={customer.name}
              onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="number">Number:</label>
            <input
              type="text"
              id="number"
              value={customer.number}
              onChange={(e) => setCustomer({ ...customer, number: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              value={customer.city}
              onChange={(e) => setCustomer({ ...customer, city: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="status">Status:</label>
            <input
              type="text"
              id="status"
              value={customer.status}
              onChange={(e) => setCustomer({ ...customer, status: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="country">Country:</label>
            <input
              type="text"
              id="country"
              value={customer.country}
              onChange={(e) => setCustomer({ ...customer, country: e.target.value })}
              required
            />
          </div>
          <button type="submit">Create Customer</button>
        </form>
      </div>
      <div>
        {/* Reservations */}
        <div>
          <h2>Reservations</h2>
          <ul>
            {reservations.map((reservation, index) => (
              <li key={index}>
                {/* Display reservation details */}
              </li>
            ))}
          </ul>
        </div>
        <form onSubmit={handleCreateReservation}>
          <input type="hidden" value={customer.id} />
          <div>
            <label htmlFor="reservationDate">Reservation Date:</label>
            <input
              type="number"
              id="reservationDate"
              value={reservationDate}
              onChange={(e) => setReservationDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="reservationTime">Reservation Time:</label>
            <input
              type="number"
              id="reservationTime"
              value={reservationTime}
              onChange={(e) => setReservationTime(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="partySize">Party Size:</label>
            <input
              type="number"
              id="partySize"
              value={partySize}
              onChange={(e) => setPartySize(e.target.value)}
              required
            />
          </div>
          <button type="submit">Create Reservation</button>
        </form>
      </div>
    </div>
  );
};

export default CustomerReservationFlow;

