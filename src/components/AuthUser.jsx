import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { ToastContainer, toast } from "react-toastify";

export default function AuthUser({ children }) {
  const { userIn } = useUserContext();

  if (!userIn) {
    toast.error("Inicia sesión para continuar");
    return <Navigate to={"/"} />;
  }
  <ToastContainer />;
  return children;
}
