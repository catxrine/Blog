import { Link } from "react-router-dom";
import { categories } from "../../../utils/utils";

export default function Categories() {
  return (
    <>
      {categories.map((category) => {
        return (
          <li key={category}>
            <Link state={category} to={`/categories/${category}`}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Link>
          </li>
        );
      })}
    </>
  );
}
