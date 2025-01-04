import { Link } from "react-router-dom";
import { PostCategories } from "../constants/constants";
import Search from "./shared/Search";
import Filters from "./shared/Filters";
const SideMenu = () => {
  return (
    <div className="sticky px-4 h-max  top-8">
      <h1 className="mb-4 text-sm font-medium">Search</h1>
      <Search />
      <h1 className="mt-8 mb-4 text-sm font-medium">Filters</h1>
      <Filters />
      <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
      <div className="flex flex-col gap-4 text-sm">
        {PostCategories.map((category) => {
          let href;
          if (category.href === "/posts") {
            href = category.href;
          } else {
            href = `/posts?category=${category.href}`;
          }
          return (
            <Link key={category.title} className="underline" to={href}>
              {category.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default SideMenu;
