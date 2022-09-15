import { FiNavigation } from "react-icons/fi";
import { BsArrowRightCircle } from "react-icons/bs";
import { BiCycling } from "react-icons/bi";
import { FaStore } from "react-icons/fa";
const StoreInfo = () => {
  return (
    <div className="h-14 flex items-center  justify-center px-16 w-full">
      <div className="flex items-center justify-between w-[450px] bg-white h-full ml-6">
        <div className="flex items-center gap-2">
          <FiNavigation fill="black" />
          <p className="text-gray-500">Adres Seçin</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-accent text-md">Adres Seç</p>
          <BsArrowRightCircle fontSize={25} className="text-accent " />
        </div>
      </div>
      <div className="flex flex-2 items-center justify-between ml-10 px-8 bg-secondary h-full w-[768px]">
        <div className="flex gap-3 items-center">
          <BiCycling fontSize={20} />
          <p className="font-bold">Adrese Teslim</p>
        </div>
        <div>
          <p className="text-secondary">Min sepet</p>
        </div>
        <div>
          <p className="text-secondary">Gönderim</p>
        </div>
        <div>
          <p className="text-secondary">
            Nasıl Çalışır? <strong>bilgi al</strong>
          </p>
        </div>
      </div>
      <div className="flex items-center gap-5 h-full flex-1  ml-4">
        <div className="flex items-center gap-3">
          <FaStore />
          <p className="font-bold"> Marketten Gel Al</p>
        </div>
        <p className="text-secondary">Min sepet</p>
      </div>
    </div>
  );
};

export default StoreInfo;
