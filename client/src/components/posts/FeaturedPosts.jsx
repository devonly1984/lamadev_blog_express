import Image from '../shared/Image'
import {Link} from 'react-router-dom'
import FeaturedPost from './FeaturedPost';
import { dummyData } from '../../constants/constants';
const FeaturedPosts = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 mt-8">
      {/**first */}
      <section className="w-full lg:w-1/2 flex flex-col gap-4">
        {/**Image */}

        <Image
          src="featured1.jpeg"
          className="rounded-3xl object-cover"
          w="895"
        />

        {/**details */}
        <div className="flex items-center gap-4 ">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link className="text-blue-800 lg:text-lg">Category</Link>
          <span className="text-gray=500">X days ago</span>
        </div>
        {/**title */}
        <Link
          to="/test"
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          Voluptate minim qui anim fugiat proident
        </Link>
      </section>
      {/**others */}
      <section className="w-full lg:w-1/2 flex flex-col gap-4">
        {dummyData.map((post) => (
          <FeaturedPost post={post} key={`${post.index}-${post.img}`} />
        ))}
      </section>
    </div>
  );
};
export default FeaturedPosts;