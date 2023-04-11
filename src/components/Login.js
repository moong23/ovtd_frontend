import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const [userId, setUserId] = useState("");
  const { setUser } = useContext(UserContext);

  const handleLogin = (e) => {
    e.preventDefault();
    if (userId) {
      setUser({ id: userId });
    }
  };

  const handleInputChange = (e) => {
    setUserId(e.target.value);
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="userId">User ID:</label>
        <input
          type="text"
          id="userId"
          name="userId"
          value={userId}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
