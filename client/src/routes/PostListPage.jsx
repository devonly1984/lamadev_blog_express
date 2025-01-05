import { useState } from "react";
import PostList from "../components/posts/PostList";
import SideMenu from "../components/shared/SideMenu";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../lib/post.helpers";
import PostListItem from "../components/posts/PostListItem";

const PostListPage = () => {
  const [open, setOpen] = useState(false)
  const {
    data:posts,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching: isPending,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage.hasMore ? pages.length + 1 : undefined,
  });

  if (isPending) return <>Loading...</>;
  if (error) {
    return "An Error has occurred "+error.message
  }
  const allPosts = posts?.pages?.flatMap((page) => page.posts) || [];
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
          {allPosts.map((post) => (
            <PostList key={post._id} />
          ))}
        </div>
        <div className={`${open ? "block" : "hidden"} md:block`}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
}
export default PostListPage