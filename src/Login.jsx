// import React, { useState } from 'react';
// import axios from 'axios';
// import './login.css'

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async () => {
//     try {
//       const headers = {
//         Authorization: `Bearer RGFhci05MUAxMjM0OlBhc3M3NkBAJiY=`,
//         'Content-Type': 'application/json',
//         "access-control-allow-origin" : "*",
//         // Add any other headers you might need
//       };

//       const data = {
//         username: username,
//         password: password
//       };

//       const response = await axios.post(
//         'https://daarconn-dev.alarkan.com/Account/validatelogin',
//         JSON.stringify(data),
//         { headers: headers }
//       );

//       const { token } = response.data;
//       localStorage.setItem('token', token);

//       // Redirect or perform other actions on successful login
//     } catch (error) {
//       setError('Invalid credentials. Please try again.');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h1>Login</h1>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       {error && <p className="error-message">{error}</p>}
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import axios from "axios";
import "./login.css";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    const headers = {
      "Content-Type": "application/json",
      "access-control-allow-origin": "*",
      // Add any other headers you might need
    };
    try {
      const response = await axios.post("http://localhost:8080/users/login", {
        email: email,
        password: password,
        headers: headers,
      });

      console.log("Response : ", response.data);
      if (response.data) {
        // const { token } = response.data;
        localStorage.setItem("token", JSON.stringify(response.data.token));
        // sessionStorage.setItem("token", "Test");
        setError("");
        onLogin(); // Notify parent component about successful login
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className="error-message">{error}</p>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
