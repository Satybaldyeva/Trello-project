import React from "react";

import { LoginPage } from "./LoginPage";
import { useDispatch } from "react-redux";
import { Main } from "../components/Main";
import { removeUser } from "../store/slices/userSlice";
import { useAuth } from "../hooks/use-Auth";

export const HomePage = () => {
  const dispatch = useDispatch();

  const { isAuth } = useAuth();
  return isAuth ? (
    <div>
      <Main onLogOut={() => dispatch(removeUser())}></Main>
    </div>
  ) : (
    <div>
      <LoginPage />
    </div>
  );
};
