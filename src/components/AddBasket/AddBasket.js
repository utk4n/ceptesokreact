import { AiOutlinePlus } from "react-icons/ai";
import useModal from "../../hooks/useModal";
const AddBasket = () => {
  const { openModal } = useModal();



  return (
    <AiOutlinePlus
      onClick={openModal}
      className="absolute top-[-1.5rem] right-[-10px] bg-white rounded-full shadow-lg text-sm w-10 h-10  p-2 cursor-pointer"
      color="green"
    />
  );
};

export default AddBasket;
