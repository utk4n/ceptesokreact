import { createContext, useEffect, useState } from "react";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../firebase/firebaseConfig";
import { useDispatch } from "react-redux";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [userInfos, setUserInfos] = useState([]);
  const dispatch = useDispatch();
  const signUp = async (email, password, fullname) => {
    await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, "user", email), {
      name: fullname,
      userBasket: [],
      userFavs: [],
    });
  };

  const signIn = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    await signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    onSnapshot(doc(db, "user", `${user?.email}`), (doc) => {
      setUserInfos(doc.data());
    });
  }, [dispatch, user?.email]);

  return (
    <UserContext.Provider
      value={{ signUp, signIn, logout, user, userInfos, setUserInfos }}
    >
      {children}
    </UserContext.Provider>
  );
};
