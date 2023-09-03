import React from "react";
import { Link } from "react-router-dom";
import { SignUp } from "../components/SignUp";

export const RegisterPage = () => {
  return (
    <div>
      <h1>Register</h1>
      <SignUp />
      <p>
        Alreadey have an account? <Link to="/login">Sign In</Link>
      </p>
    </div>
  );
};
