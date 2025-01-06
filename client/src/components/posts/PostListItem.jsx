import { Link } from "react-router-dom";
import Image from "../shared/Image";
import {format} from 'timeago.js'
const PostListItem = ({post}) => {
  return (
    <div className="flex flex-col xl:flex-row gap-8 mb-8">
      {/**Image */}
      {post.img && (
        <div className="md:hidden  xl:block xl:w-1/3">
          <Image
            src={post.img || "default-image.jpeg"}
            className="rounded-2xl object-cover"
            w="737"
          />
        </div>
      )}
      {/**details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to={`/${post.slug}`} className="text-4xl font-semibold">
          {post.title}
        </Link>
        <div className=" flex items-center gap-2 text-gray-400 text-sm ">
          <span>Written By</span>
          <Link className="text-blue-800">John Doe</Link>
          <span>on</span>
          <Link className="text-blue-800">{post.category}</Link>
          <span>{format(post.createdAt)} days ago</span>
        </div>
        <p>{post.description}</p>
        <Link to={`/${post.slug}`} className="underline text-sm text-blue-800">
          Read More
        </Link>
      </div>
    </div>
  );
};
export default PostListItem;