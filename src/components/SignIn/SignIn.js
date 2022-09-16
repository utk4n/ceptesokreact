import { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { UserAuth } from "../../hooks/userAuth";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, user } = UserAuth();
const navigate = useNavigate()
  const signInHandle = (e) => {
    e.preventDefault();
    signIn(email, password);
    navigate('/')
  };

  return (
    <div className="w-full flex items-center flex-col mx-auto p-6 bg-secondary">
      <h3 className="text-2xl font-bold">Giriş Yap</h3>
      <div className="w-1/3 bg-white my-5 rounded-xl shadow-lg ">
        <div className="bg-[url(https://www.sokmarket.com.tr/assets/images/modals/auth/login-head-bg.png)] w-full flex items-center flex-col justify-center bg-no-repeat rounded-t-xl">
          <BsFillPersonFill className="text-9xl" />
        </div>
        <form
          onSubmit={signInHandle}
          className="flex flex-col gap-6 items-center justify-center w-full  "
        >
          <label className="font-bold flex flex-col mt-5">
            Email
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border border-cyan-500 rounded-md w-[20vw]"
              type="email"
            />
          </label>

          <label className="font-bold flex flex-col">
            Şifre
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 border border-cyan-500 rounded-md w-[20vw]"
              type="password"
            />
          </label>

          <button
            type="submit"
            className="bg-button text-white w-1/2 h-12 mx-auto rounded-3xl mt-2 mb-5"
          >
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
