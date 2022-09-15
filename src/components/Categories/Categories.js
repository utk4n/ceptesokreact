import categoriesData from "../../datas/categories.json";
import CategoryItem from "../CategoryItem/CategoryItem";
const Categories = () => {
  return (
    <div className="flex  p-16 flex-col">
      <h3 className="text-secondary font-bold mb-8">Kategoriler</h3>
      <ul className="grid grid-cols-2 gap-3 justify-center items-center lg:grid-cols-7 md:grid-cols-4 sm:grid-cols-3">
        {categoriesData.map((item) => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Categories;
