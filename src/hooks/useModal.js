import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { modalState } from "../redux/modalSlice";
const useModal = () => {
  const navigate = useNavigate();

  const modal = useSelector((state) => state.modal.status);
  const dispatch = useDispatch();

  const signInNav = () => {
    dispatch(modalState());
    navigate("/signin");
  };

  const signUpNav = () => {
    dispatch(modalState());
    navigate("signup");
  };

  const openModal = () => {
    dispatch(modalState());
  };

  return {
    modal,
    signInNav,
    signUpNav,
    openModal,
  };
};

export default useModal;
