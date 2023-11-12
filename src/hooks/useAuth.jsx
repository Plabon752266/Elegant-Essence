import { UserContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";
const useAuth = () => {
  const data = useContext(UserContext);

  return  data
};

export default useAuth;
