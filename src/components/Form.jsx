import React from "react";

export const Form = ({ title, handleClick }) => {
  return (
    <form action="">
      <input
        type="email"
        placeholder="Enter your email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button type="submit" onClick={() => handleClick(email, pass)}>
        {title}
      </button>
    </form>
  );
};
