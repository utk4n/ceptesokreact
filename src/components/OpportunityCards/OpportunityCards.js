import AddBasket from "../AddBasket/AddBasket";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../redux/productsSlice";
const OpportunityCards = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const arrayReducer = products.slice(65, 70);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div className="flex items-center gap-4 mt-4">
      {arrayReducer.map((product) => (
        <div
          key={product.id}
          className="relative w-[290px] h-[114px] p-[1rem] bg-white mt-4 shadow-md rounded-md gap-5 flex"
        >
          <div className="h-20 w-20 relative  flex items-center justify-center">
            <img
              className="h-full"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019"
              alt=""
            />

            <p className=" w-full tracking-tight leading-4 text-center bg-primary py-1 rounded-md absolute bottom-[-4px] left-0 font-medium text-xs">
              25 TL üzeri indirimli
            </p>
          </div>
          <div className="">
            <p className="text-sm">{product.product_name}</p>
            <p className="bg-primary inline-block p-1 mt-2 text-red-600 font-bold rounded-md">
              ₺{product.price.original}
            </p>
          </div>

          <AddBasket product={product} />
        </div>
      ))}
    </div>
  );
};

export default OpportunityCards;
