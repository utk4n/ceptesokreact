import brandLogo from "../../assets/brandlogo/soklogo.svg";
import {
  BsFillGiftFill,
  BsFillPersonFill,
  BsFillCartFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { AiOutlineDown } from "react-icons/ai";
import { GiBeachBag } from "react-icons/gi";
import categories from "../../datas/categories.json";
import useStateChanger from "../../hooks/useStateChanger";
import useModal from "../../hooks/useModal";
const Header = () => {
  const { state, stateHandle } = useStateChanger();
  const { openModal } = useModal();
  return (
    <div className="bg-primary h-[140px] py-3 px-14">
      <div className="flex items-center justify-end gap-4">
        <div>
          <button className="bg-button text-white py-[0.5px] px-[10px] text-md font-medium rounded-md tracking-tighter">
            KURUMSAL
          </button>
        </div>
        <div>
          <button className="bg-button text-white py-[0.5px] px-[10px] text-md font-medium rounded-md tracking-tighter">
            YATIRIMCI İLİŞKİLERİ
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between mt-3">
        <div className="w-[60px]">
          <Link to={"/"}>
            <img src={brandLogo} alt="" />
          </Link>
        </div>
        <div className=" hidden md:flex gap-5 ">
          <div
            className="bg-button text-white flex items-center px-3 gap-4 justify-between rounded-md  w-[230px]  cursor-pointer"
            onClick={stateHandle}
          >
            <div className="flex gap-3 items-center ">
              <GiBeachBag className="text-3xl" />
              <div className="relative">
                <p className="text-md">Kategoriler</p>
                {state && (
                  <div className="z-50 absolute mt-5 -left-16 w-[250px] p-2 bg-slate-200 rounded-md">
                    {categories.map((cat) => (
                      <Link to={`categories/${cat.category_breadcrumb}`}>
                        <div className="p-3 border border-b-slate-300 hover:text-sky-400 mt-2 text-black bg-slate-200">
                          {cat.title}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <AiOutlineDown className="text-lg" />
          </div>

          <div className="relative">
            <input
              className="p-4 px-14 w-[450px] rounded-md outline-none"
              type="text"
              placeholder="Ör. Yumurta"
            />
            <FiSearch className="absolute left-4 top-4 text-2xl" />
          </div>
        </div>
        <div className="flex items-center gap-4 font-normal">
          <div className="flex items-center gap-3">
            <BsFillGiftFill className="text-3xl" />
            <p>Kampanyalar</p>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <BsFillPersonFill className="text-3xl" />
              <div className="flex flex-col leading-none items-start font-medium">
                <button onClick={openModal}>Giriş Yap</button>
                <button onClick={openModal}>Üye Ol</button>
              </div>
            </div>
          </div>
          <div className="mx-2">
            <BsFillCartFill className="text-3xl" />
          </div>
          <div>
            <p className="bg-price px-1 rounded-xl text-white">₺ 0.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
