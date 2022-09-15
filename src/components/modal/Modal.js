import { createPortal } from "react-dom";
import useModal from "../../hooks/useModal";
import { AiOutlineClose } from "react-icons/ai";
const Modal = () => {
  const { modal, signInNav, signUpNav, openModal } = useModal();

  if (modal) {
    return createPortal(
      <div className="w-[430px] h-[500px] fixed top-[5%] left-[35%] shadow-slate-900 shadow-xl">
        <div className=" relative">
          <img
            className=" rounded-lg"
            src="https://www.sokmarket.com.tr/static/media/intro-head.c4d26773.jpg"
            alt=""
          />
          <div className="absolute top-0 right-0 text-white fill-white bg-transparent">
            <AiOutlineClose
              onClick={openModal}
              className="text-6xl cursor-pointer text-white font-bolder"
            />
          </div>
        </div>
        <div className="flex flex-col bg-white gap-3 py-3">
          <button
            onClick={signInNav}
            className="bg-button p-3 text-white w-2/3 mx-auto rounded-md"
          >
            Giriş Yap
          </button>
          <button
            onClick={signUpNav}
            className="bg-stone-800 p-3 text-white w-2/3 mx-auto rounded-md"
          >
            Yeni Üyelik Oluştur
          </button>
        </div>
        <div className="flex flex-col bg-white py-4 rounded-lg">
          <button className="text-center" onClick={openModal}>
            Giriş yapmadan devam et
          </button>
        </div>
      </div>,
      document.getElementById("portal")
    );
  } else {
    return;
  }
};

export default Modal;
