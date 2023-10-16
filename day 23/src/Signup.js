import React, { useState } from "react";
import Logo from './COMPONENTS/Logo';
import TextField from '@mui/material/TextField';
import "./styles.css";


function Signup() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userData, setUserData] = useState(null); // Store user data
  const [allUsers, setAllUsers] = useState([]); // Store all users

  // User Login info
  const database = [
    {
      username: "walker",
      password: "Master"
    },
    {
      username: "Eren",
      password: "tatakae"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const user = database.find((user) => user.username === uname.value);

    // Compare user info
    if (user) {
      if (user.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
        setUserData(null); // Clear user data
      } else {
        setIsSubmitted(true);
        setUserData(user); // Store user data
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
      setUserData(null); // Clear user data
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
    const createUser = (username, password) => {
        const newUser = { username, password };
        setAllUsers([...allUsers, newUser]);
      };
  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <TextField variant="standard" label='Username' type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          {/* <label>Password </label> */}
          <TextField type="password" variant="standard" label='Password'name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
  return (
    <>
    <Logo/>
    <div className="app">
      <div className="login-form">
      <div className="create-user">
          <div className='title'>Sign-Up</div>
          <div className="input-container">
            <label>Username </label>
            <TextField variant="standard" type="text" id="new-username" required />
          </div>
          <div className="input-container">
            <label>Password </label>
            <TextField variant="standard" type="password" id="new-password" required />
          </div>
          <div className="button-container">
            <button
              onClick={() => {
                const newUsername = document.getElementById("new-username").value;
                const newPassword = document.getElementById("new-password").value;
                createUser(newUsername, newPassword);
              }}
            >
              Create User
            </button>
          </div>
        </div>
        {/* <div className="user-list">
          <h2>All Users</h2>
          <ul>
            {allUsers.map((user, index) => (
              <li key={index}>
                Username: {user.username}, Password: {user.password}
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </div>
    </>
  );
}

export default Signup;

// ReactDOM.render(<logo />, document.getElementById("root"));
