import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Comment from "./Comment";
import { fetchComments } from "../../lib/comment.helpers";
import { useAuth, useUser } from "@clerk/clerk-react";
import axios from "axios";
import { apiUrl } from "../../constants/environment";
import { toast } from "react-toastify";

const Comments = ({ postId }) => {
  const queryClient = useQueryClient();
  const {getToken} = useAuth()
  const {user} = useUser();
  const createCommentMutation = useMutation({
    mutationFn: async(newComment)=>{
      const token = await getToken();
      return axios.post(`${apiUrl}/comments/${postId}`, newComment, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: ()=>{
      queryClient.invalidateQueries({ queryKey: "comments" });
    },
    onError:(err)=>{
      toast.error(err.message);
    }
    
  })
  const {
    isPending,
    error,
    data: comments,
  } = useQuery({
    queryKey: ["comments", "postId"],
    queryFn: () => fetchComments(postId),
  });
  if (isPending) {
    return <>Loading...</>;
  }
  if (error) {
    return <>Something went wrong {error.message}</>;
  }
  const handleSubmit = e=>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      description: formData.get("description")
    }
    createCommentMutation.mutate(data);
  }
  return (
    <div className="flex flex-col gap-8 lg:w-3/5">
      <h1 className="text-xl text-gray-500 underline">Comments</h1>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-between gap-8 w-fulls"
      >
        <textarea
          placeholder="Write a Comment"
          name="description"
          id=""
          className="w-full p-4 rounded-xl"
        />
        <button className="bg-blue-800 px-4 py-3 text-white font-medium rounded-xl">
          Send
        </button>
      </form>
      {isPending ? (
        "Loading comments..."
      ) : error ? (
        "Error Loading Comments"
      ) : (
        <>
          {createCommentMutation.isPending && (
            <Comment
              comment={{
                description: `${createCommentMutation.variables.description} (Sending ...)`,
                createdAt: new Date(),
                user: {
                  img: user.imageUrl,
                  username: user.username,
                },
              }}
            />
          )}
          {comments.map((comment) => (
            <Comment key={comment._id} comment={comment} postId={postId} />
          ))}
        </>
      )}
    </div>
  );
};
export default Comments