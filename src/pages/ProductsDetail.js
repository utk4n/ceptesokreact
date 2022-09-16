import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/productsSlice";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import useModal from "../hooks/useModal";
const ProductsDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const productDisplay = products.find((pro) => pro.product_name === id);
  const { addFavList, fav, setFav } = useModal();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className=" flex flex-col w-full py-3">
      <p className="font-medium text-sm my-4 mx-auto text-slate-500">
        {productDisplay?.category_breadcrumb}
      </p>
      <div className="flex w-full justify-center">
        <div className="bg-white rounded-md shadow-lg p-5 flex">
          <img
            className="w-1/2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019"
            alt=""
          />
          <div className="flex flex-col gap-3 w-full ml-7">
            {fav ? (
              <FaHeart className="ml-auto text-2xl text-red-600" />
            ) : (
              <FiHeart
                onClick={() => addFavList(productDisplay)}
                className="ml-auto text-2xl"
              />
            )}
            <p className=" w-16 my-3 text-center bg-primary text-red-500 rounded-md py-1 font-extrabold">
              ₺{productDisplay?.price.original}
            </p>
            <p>{productDisplay?.product_name}</p>
            <button className="bg-button text-white p-3 rounded-3xl mt-3 w-2/3">
              Sepete Ekle
            </button>
          </div>
        </div>
        <div className=" ml-5  h-max px-4  w-[25%] rounded-md">
          <p className="font-bold text-gray-500">Açıklamalar</p>
          <div className=" shadow-lg rounded-md py-4 divide-y ">
            <div className="flex justify-between mb-3">
              <p className="font-bold ml-3">Kodu</p>
              <p className="mr-3">{productDisplay?.product_code}</p>
            </div>
            <div className="flex justify-between mt-3 pt-2">
              <p className="font-bold ml-3">Menşei</p>
              <p className="mr-3">{productDisplay?.madein}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetail;
