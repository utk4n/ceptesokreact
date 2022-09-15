import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/productsSlice";
import { useParams } from "react-router-dom";
const CategoriesPage = () => {
  const { category } = useParams();
  const { products } = useSelector((state) => state.products);
  const categoryProducts = products[0]?.filter((pro) =>
    pro.category_breadcrumb.includes(category)
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="w-full p-20 bg-secondary">
      <h3 className="font-bold mb-5">{category}</h3>
      <div className="w-full bg-white p-10  rounded-md">
        <div className="grid grid-cols-7 gap-5">
          {categoryProducts?.map((product) => (
            <div className="text-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019"
                alt=""
              />
              <p className="block w-16 my-3 mx-auto bg-primary text-red-500 rounded-md py-1 font-extrabold">
                ₺{product.price.original}
              </p>
              <p>{product.product_name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
