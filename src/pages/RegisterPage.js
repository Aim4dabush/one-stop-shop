import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//components
import Register from "../components/register/Register";

//redux
import { useDispatch, useSelector } from "react-redux";

//slices
import { setRegisteredReset } from "../redux/slices/authSlice";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { registered } = useSelector((state) => state.auth);

  useEffect(() => {
    if (registered) {
      navigate("/login", { replace: true });
      dispatch(setRegisteredReset());
    }
  }, [dispatch, navigate, registered]);
  return (
    <section>
      <Register />
    </section>
  );
};

export default RegisterPage;
