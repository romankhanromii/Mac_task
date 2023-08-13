// const express = require('express');
// const cors = require('cors');
// const axios = require('axios');

// const app = express();

// const allowedOrigins = ['http://localhost:3000']; // Update with your React app's domain

// app.use(cors({
//   origin: (origin, callback) => {
//     if (allowedOrigins.includes(origin) || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));

//     }
//   }
// }));

// // Middleware to parse JSON in request bodies
// app.use(express.json());

// // Route handler for validating login
// app.post('/api/validateLogin', async (req, res) => {
//   try {
//     // Get the user credentials from the request body
//     const { UserName, Password } = req.body;

//     // Call the external API to validate the login
//     const response = await axios.post('https://daarconn-dev.alarkan.com/Account/validatelogin', {
//       UserName,
//       Password
//     });

//     // Check if the login was successful (status code 200)
//     if (response.status === 200) {
//       // Send the API response back as a JSON response
//       res.json(response.data);
//     } else {
//       // If the response status code is not 200, send an error response
//       res.status(response.status).json({ error: 'Invalid credentials' });
//     }
//   } catch (error) {
//     // Handle specific error cases
//     if (error.response && error.response.status === 401) {
//       // Unauthorized error (invalid credentials)
//       res.status(401).json({ error: 'Invalid username or password' });
//     } else {
//       // Other errors
//       console.error('Error validating login:', error);
//       res.status(500).json({ error: 'Error validating login' });
//     }
//   }
// });

// // Route handler for creating customer and reservation
// app.post('/api/createCustomerReservation', async (req, res) => {
//   try {
//     // Get the customer and reservation data from the request body
//     const { customerData, reservationData } = req.body;

//     // Call the external API to create customer and reservation
//     const response = await axios.post('https://daarconn-dev.alarkan.com/oracle/createcustomerreservation', {
//       customerData,
//       reservationData
//     });

//     // Send the API response back as a JSON response
//     res.json(response.data);
//   } catch (error) {
//     // Handle errors if any occurred during the API request
//     console.error('Error creating customer and reservation:', error);
//     res.status(500).json({ error: 'Error creating customer and reservation' });
//   }
// });

// // Start the server
// const PORT = 3001;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Set up a proxy for the remote API
app.use(
  '/api',
  createProxyMiddleware({
    target: 'https://daarconn-dev.alarkan.com',
    changeOrigin: true,
  })
);
console.log(  createProxyMiddleware.target )
// Serve the React app (assuming your built React app is in the 'build' directory)
app.use(express.static('build'));

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

