import { Link } from "react-router-dom";
import Image from "../shared/Image";

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/**Image */}
      <div className="md:hidden  xl:block xl:w-1/3">
        <Image
          src="postImg.jpeg"
          className="rounded-2xl object-cover"
          w="737"
        />
      </div>
      {/**details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-4xl font-semibold">
          Pariatur esse dolore Lorem enim veniam esse veniam occaecat est in
          laborum proident qui.
        </Link>
        <div className=" flex items-center gap-2 text-gray-400 text-sm ">
          <span>Written By</span>
          <Link className="text-blue-800">John Doe</Link>
          <span>on</span>
          <Link className="text-blue-800">Category</Link>
          <span>X days ago</span>
        </div>
        <p>
          Dolore aute consectetur Lorem occaecat do sint anim exercitation
          officia. Nulla sunt officia consequat aliquip fugiat exercitation
          tempor consequat ut adipisicing culpa officia deserunt amet. Cillum
          cillum aute esse voluptate enim eiusmod. Eiusmod elit amet in sit
          laborum esse laborum deserunt velit consectetur dolor in culpa.
          Aliquip veniam mollit occaecat laborum laborum labore ad minim laborum
          qui labore. Ex minim nulla ut cupidatat ut consequat elit cupidatat
          adipisicing adipisicing exercitation anim.
        </p>
        <Link to="/test" className="underline text-sm text-blue-800">
          Read More
        </Link>
      </div>
    </div>
  );
};
export default PostListItem;