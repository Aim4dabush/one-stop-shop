import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//components
import Login from "../components/login/Login";

//redux
import { useSelector } from "react-redux";

//services

const LoginPage = () => {
  const navigate = useNavigate();
  const { loggedUser } = useSelector((state) => state.auth);

  useEffect(() => {
    if (loggedUser.token) {
      navigate("/", { replace: true });
    }
  }, [navigate, loggedUser]);
  return (
    <section>
      <Login />
    </section>
  );
};

export default LoginPage;
