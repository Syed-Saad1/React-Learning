import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
function Login() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ Username: Username, password: Password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="type your name"
        value={Username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {"           "}
      <input
        type="text"
        placeholder="Password"
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
