import { useInfiniteQuery } from "@tanstack/react-query";
import PostListItem from "./PostListItem";
import { fetchPosts } from "../../lib/post.helpers";
import InfiniteScroll from 'react-infinite-scroll-component'
const PostList = () => {
  const {
    data: posts,
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
    <InfiniteScroll
      dataLength={allPosts.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<h4>Loading more posts...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>All Posts Loaded!</b>
        </p>
      }
    >
      {allPosts.map((post) => (
        <PostListItem key={post._id} post={post} />
      ))}
    </InfiniteScroll>
  );
}
export default PostList