import { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { UserAuth } from "../../hooks/userAuth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const { signUp } = UserAuth();
  const formValidation =
    email.length < 3 && password.length < 3 && fullname.length < 3;

  const signUpHandle = (e) => {
    e.preventDefault();
    if (formValidation) {
      console.log("invalid");
    } else {
      signUp(email, password, fullname);
    }
  };

  return (
    <div className="w-full flex items-center flex-col mx-auto p-6 bg-secondary">
      <h3 className="text-2xl font-bold">Yeni Üyelik Oluştur</h3>
      <div className="w-1/3 bg-white my-5 rounded-xl shadow-lg ">
        <div className="bg-[url(https://www.sokmarket.com.tr/assets/images/modals/auth/login-head-bg.png)] w-full flex items-center flex-col justify-center bg-no-repeat rounded-t-xl">
          <BsFillPersonFill className="text-9xl" />
        </div>
        <form
          onSubmit={signUpHandle}
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
            Ad Soyad
            <input
              onChange={(e) => setFullname(e.target.value)}
              className="p-2 border border-cyan-500 rounded-md w-[20vw]"
              type="text"
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
          <div className=" flex flex-col gap-4 p-4">
            <div className="flex gap-3 ">
              <input type="checkbox" id="cond1" className="scale-150" />
              <p>
                <span className="text-accent font-bold">
                  Kullanım Koşulları
                </span>
                'nı okudum, onaylıyorum.
              </p>
            </div>
            <div className="flex items-center gap-3 my-3 ">
              <input type="checkbox" id="cond2" className=" scale-150" />
              <p>
                <span className="text-accent font-bold">Aydınlatma Metni</span>
                'ni okudum, kişisel verilerimin bu kapsamda işlenmesine rıza
                gösteriyorum.
              </p>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" id="cond3" className="scale-150" />
              <p>
                Bana özel kampanyalardan e-posta ve SMS ile haberdar olmak
                istiyorum.
              </p>
            </div>
          </div>
          <button
            type="submit"
            className="bg-button text-white w-1/2 h-12 mx-auto rounded-3xl mt-2 mb-5"
          >
            Üyelik Oluştur
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
