import Image from "../shared/Image";
import { format } from "timeago.js";
import { useAuth, useUser } from "@clerk/clerk-react";
import { toast } from "react-toastify";
import { apiUrl } from "../../constants/environment";
import axios from "axios";
import { QueryClient, useMutation } from "@tanstack/react-query";
const Comment = ({comment,postId}) => {
  const {user} = useUser();
  const {getToken} = useAuth()
  const role = user.publicMetadata.role 
  const queryClient = new QueryClient();
  const deleteMutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return axios.delete(`${apiUrl}/comments/${comment._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["comments", postId] });
          toast.success("Comment deleted successfully!");
        
        },
        onError: (err) => {
          toast.error(err.response.data);
        },
      });
    },
  });
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        {comment.user.img && (
          <Image
            src={comment.user.img}
            className="size-10 rounded-full object-cover"
            w="40"
          />
        )}
        <span className="font-medium">{comment.user.username}</span>
        <span className="text-sm text-gray-500">
          {format(comment.createdAt)}
        </span>
        {user &&
          (comment.user.username === user.username || role === "admin") && (
            <span
              className="text-xs text-red-300 hover:text-red-500 cursor-pointer"
              onClick={() => deleteMutation.mutate()}
            >
              Delete
              {deleteMutation.isPending && <span>(in progress)</span>}
            </span>
          )}
      </div>
      <div className="mt-4">
        <p>{comment.description}</p>
      </div>
    </div>
  );
};
export default Comment;