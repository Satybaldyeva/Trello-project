import { useSelector } from "react-redux";

export function useAuth() {
  const email = useSelector((state) => state.user);
  const token = useSelector((state) => state.user);
  const id = useSelector((state) => state.user);

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
}
