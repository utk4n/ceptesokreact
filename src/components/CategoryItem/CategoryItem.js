import React from "react";
import { Link } from "react-router-dom";
const CategoryItem = ({ item }) => {
  return (
    <Link to={`categories/${item.category_breadcrumb}`}>
      <li className="relative">
        <img src={item.img} alt="" />
        <span className="absolute top-3 left-5 w-14 font-medium text-sm">
          {item.title}
        </span>
      </li>
    </Link>
  );
};

export default CategoryItem;
