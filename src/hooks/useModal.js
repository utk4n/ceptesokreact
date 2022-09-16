import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { modalState } from "../redux/modalSlice";
import { UserAuth } from "../hooks/userAuth";
import { db } from "../firebase/firebaseConfig";
import { setDoc, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
const useModal = () => {
  const navigate = useNavigate();
  const { user } = UserAuth();
  const modal = useSelector((state) => state.modal.status);
  const [fav, setFav] = useState(false);
  const dispatch = useDispatch();

  const signInNav = () => {
    dispatch(modalState());
    navigate("/signin");
  };

  const signUpNav = () => {
    dispatch(modalState());
    navigate("/signup");
  };

  const addToBasket = async (item) => {
    const basketPath = doc(db, "user", `${user?.email}`);
    await updateDoc(basketPath, {
      userBasket: arrayUnion(item),
    });
  };

  const openModal = (item) => {
    if (!user) {
      dispatch(modalState());
    } else {
      addToBasket(item);
    }
  };

  const addFavList = async (item) => {
    const favPath = doc(db, "user", `${user?.email}`);
    await updateDoc(favPath, {
      userFavs: arrayUnion(item),
    });
    setFav(true)
  };

  return {
    modal,
    signInNav,
    signUpNav,
    openModal,
    addFavList,
    fav,
    setFav,
  };
};

export default useModal;
