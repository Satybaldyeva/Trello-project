import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div>
      <h1>Вход в trello</h1>
      <form>
        <input type="email" placeholder="Enter your Email..." value={email} />
        <input
          type="password"
          placeholder="Enter your Password..."
          value={pass}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
