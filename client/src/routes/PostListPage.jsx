import { useState } from "react";

import SideMenu from "../components/shared/SideMenu";

import PostListItem from "../components/posts/PostListItem";

const PostListPage = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <h1 className="mb-8 text-2xl">Development Blog</h1>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="md:hidden bg-blue-800 text-sm text-white px-4 py-2 rounded-2xl mb-4"
      >
        {open ? "Close" : "Filter or Search"}
      </button>
      <div className="flex gap-8 flex-col-reverse md:flex-row">
        {/**Post List */}
        <div className="">
         <PostListItem/>
        </div>
        <div className={`${open ? "block" : "hidden"} md:block`}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
}
export default PostListPage