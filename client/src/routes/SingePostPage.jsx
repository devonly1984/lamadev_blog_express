import { Link } from "react-router-dom";
import Image from "../components/shared/Image"
import PostMenuAction from "../components/posts/PostMenuAction";
import Search from "../components/shared/Search";
import Comments from "../components/comments/Comments";

const SingePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/**detail */}
      <div className="flex gap-8 ">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Et aute duis incididunt amet adipisicing ad incididunt do deserunt
            qui cupidatat.
          </h1>
          <div className=" flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">John Doe</Link>
            <span>on</span>
            <Link className="text-blue-800">Category</Link>
            <span>X days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Est duis culpa et ex minim officia do laboris dolore quis.
            Adipisicing occaecat incididunt nisi non in incididunt reprehenderit
            qui quis est occaecat sunt. Est id enim et officia laboris qui ad
            aliqua aute aliquip voluptate enim deserunt.
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src="postImg.jpeg" w="600" className="rounded-2xl" />
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
              <Image
                src="userImg.jpeg"
                className="rounded-full size-12 object-cover"
                w="48"
                h="48"
              />
              <Link className="text-blue-800">John Doe</Link>
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

          <PostMenuAction />
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
      <Comments />
    </div>
  );
}
export default SingePostPage