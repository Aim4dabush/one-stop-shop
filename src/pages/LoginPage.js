import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//components
import Login from "../components/login/Login";

//redux
import { useDispatch, useSelector } from "react-redux";

//services
import { getProfile } from "../firebase/services/profile-service";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loggedUser } = useSelector((state) => state.auth);

  useEffect(() => {
    if (loggedUser.token) {
      dispatch(getProfile());
      navigate("/", { replace: true });
    }
  }, [dispatch, navigate, loggedUser]);
  return (
    <section>
      <Login />
    </section>
  );
};

export default LoginPage;
