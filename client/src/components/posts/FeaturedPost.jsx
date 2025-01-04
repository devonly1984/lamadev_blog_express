import { Link } from "react-router-dom"
import Image from "../shared/Image"

const FeaturedPost = ({ post: { index, title, img, category } }) => {
  return (
    <div className="lg:h-1/3 flex justify-between gap-4">
      <div className="w-1/3 aspect-video">
        <Image
          src={img}
          className="rounded-3xl object-cover w-full h-full "
          w="298"
        />
      </div>
      <div className="w-2/3">
        <div className="flex items-center gap-4 text-sm lg:text-base  mb-4">
          <h1 className="font-semibold">{index}.</h1>
          <Link className="text-blue-800">{category}</Link>
          <span className="text-gray-500 text-sm">X days ago</span>
        </div>
        <Link
          to="/test"
          className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
        >
          {title}
        </Link>
      </div>
    </div>
  );
};
export default FeaturedPost