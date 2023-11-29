import { Link } from "react-router-dom";

export default function Categories({ categories }) {
  return (
    <>
      {categories?.map((category) => {
        return (
          <li key={category}>
            <Link state={category} to={`/categories/${category.toLowerCase()}`}>
              {category}
            </Link>
          </li>
        );
      })}
    </>
  );
}
