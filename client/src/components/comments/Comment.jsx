import Image from "../shared/Image";

const Comment = () => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        <Image
          src="userImg.jpeg"
          className="size-10 rounded-full object-cover"
          w="40"
        />
        <span className="font-medium">John Doe</span>
        <span className="text-sm text-gray-500">X days ago</span>
      </div>
      <div className="mt-4">
        <p>
          Aliqua quis labore tempor duis aliquip non eiusmod aute enim. Veniam
          ex commodo quis incididunt ex. Velit ut ea anim incididunt. Amet
          labore ipsum tempor esse laborum eu. Irure nisi laboris id quis
          incididunt proident.
        </p>
      </div>
    </div>
  );
};
export default Comment;