import { Link, useParams } from "react-router-dom";
import Image from "../components/shared/Image"
import PostMenuAction from "../components/posts/PostMenuAction";
import Search from "../components/shared/Search";
import Comments from "../components/comments/Comments";
import { useQuery } from "@tanstack/react-query";
import { fetchPostBySlug } from "../lib/post.helpers";
import { format } from "timeago.js";

const SingePostPage = () => {
  const { slug } = useParams();
  const { isPending, error, data:post } = useQuery({
    queryKey: ["post", "slug"],
    queryFn: () => fetchPostBySlug(slug),
  });
  if (isPending) {
    return <>Loading...</>;
  }
  if (error) {
    return <>Something went wrong {error.message}</>
  }
  if (!post) {
    return <>Post not found</>;
  }
  return (
    <div className="flex flex-col gap-8">
      {/**detail */}
      <div className="flex gap-8 ">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            {post.title}
          </h1>
          <div className=" flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">{post.user.username}</Link>
            <span>on</span>
            <Link className="text-blue-800">{post.category}</Link>
            <span>{format(post.createdAt)}</span>
          </div>
          <p className="text-gray-500 font-medium">{post.description}</p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image
            src={post.img || "default-image.png"}
            w="600"
            className="rounded-2xl"
          />
        </div>
      </div>
      {/**Content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/**text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Sunt elit nisi sint culpa minim sit nulla. Labore enim ullamco
            deserunt excepteur sit fugiat officia. Cupidatat amet id elit duis
            duis laboris consectetur commodo aliquip. Incididunt incididunt
            voluptate ea anim mollit Lorem est sit laborum non qui adipisicing.
            Aute aliqua labore qui non cillum. Dolore pariatur occaecat sit duis
            dolor labore nostrud veniam officia consectetur cillum duis irure.
            In adipisicing occaecat consectetur aute ad in sunt.
          </p>
          <p>
            Occaecat laboris do laboris exercitation elit eu. Occaecat quis
            consectetur magna irure fugiat est adipisicing enim nisi nostrud id
            pariatur. Voluptate pariatur dolore culpa voluptate qui laboris ex
            nisi voluptate Lorem velit aliqua incididunt cupidatat. Ad fugiat
            culpa pariatur labore nisi.
          </p>
          <p>
            Ad sunt ad commodo nisi sunt elit et qui ullamco ipsum commodo
            officia. Mollit sint labore occaecat quis voluptate quis non tempor
            ut aliquip nostrud elit irure. Fugiat sunt ut quis amet mollit
            occaecat reprehenderit ut culpa nostrud excepteur. Nisi exercitation
            commodo sit velit dolor nulla. Excepteur do et voluptate ullamco
            ipsum voluptate dolore. Minim est consequat sint sint enim elit
            dolor ex id sunt qui deserunt reprehenderit.
          </p>
        </div>
        {/**menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className=" mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-12">
              {post.user.img && (
                <Image
                  src={post.user.img || "userImg.jpeg"}
                  className="rounded-full size-12 object-cover"
                  w="48"
                  h="48"
                />
              )}
              <Link className="text-blue-800">{post.user.username}</Link>
            </div>
            <p className="text-sm text-gray-500">
              Dolore qui eu minim officia esse quis reprehenderit laborum.
            </p>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>

          <PostMenuAction post={post} />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline">Web Design</Link>
            <Link className="underline">Development</Link>
            <Link className="underline">Search Engines</Link>
            <Link className="underline">Marketing</Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
      <Comments postId={post._id} />
    </div>
  );
}
export default SingePostPage