import { PostCategories } from "../../constants/constants";
import Search from "./Search";
import { Link } from "react-router-dom";
import { postclass, catclass } from "../../constants/styles";
const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
      {/**Links */}
      <section className="flex-1 flex items-center justify-between flex-wrap ">
        {PostCategories.map((category) => {
          let href;
          let isPost;
          if (category.href === "/posts") {
            href = "/posts";
            isPost = true;
          } else {
            href = `/posts?category=${category.href}`;
          }
          return (
            <Link
              key={`${category.href}`}
              to={href}
              className={`${isPost ? postclass : catclass}`}
            >
              {isPost ? category.title + " Posts" : category.title}
            </Link>
          );
        })}
      </section>
      {/**Search */}
      <span className="text-xl font-medium">|</span>
      <Search />
    </div>
  );
};
export default MainCategories;
