import React, { useState } from "react";
import axios from "axios";
import './customer.css'

const CustomerReservationFlow = () => {
  const [customer, setCustomer] = useState({});
  const [reservations, setReservations] = useState([]);
  const [reservationDate, setReservationDate] = useState("");
  const [reservationTime, setReservationTime] = useState("");
  const [partySize, setPartySize] = useState(1); // Default party size

  const handleCreateCustomer = (event) => {
    event.preventDefault();

    axios.post("http://localhost:8080/users/login", customer)
      .then((response) => {
        if (response.status === 200) {
          setCustomer(response.data);
        } else {
          console.log("Customer creation failed");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCreateReservation = (event) => {
    event.preventDefault();

    axios.post("http://localhost:8080/users/login", {
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
          {/* Input fields for first name, last name, email */}
          <button type="submit">Create Customer</button>
        </form>
      </div>
      <div>
        {/* Reservations */}
        {/* Display reservations */}
        <form onSubmit={handleCreateReservation}>
          <input type="hidden" value={customer.id} />
          {/* Input fields for reservation date, time, party size */}
          <button type="submit">Create Reservation</button>
        </form>
      </div>
    </div>
  );
};

export default CustomerReservationFlow;
