import { useAuth, useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill-new";
import {useMutation} from '@tanstack/react-query'
import axios from 'axios'
import { apiUrl } from "../constants/environment";
import {useNavigate} from 'react-router-dom'
import { toast } from "react-toastify";
import UploadButton from "../components/shared/UploadButton";
const WritePage = () => {
  const { isLoaded, isSignedIn } = useUser();
  const [content, setContent] = useState("");
  const [cover, setCover] = useState("");
  const [img, setImg] = useState("")
  const [video, setVideo] = useState("");
  const [progress, setProgress] = useState(0);


  useEffect(() => {
    img && setContent((prev) => prev + `<p><img src="${img.url}"/></p>`);
    
  }, [img]);
  useEffect(() => {
    video &&
      setContent(
        (prev) => prev + `<p><iframe class="ql-video" src="${video.url}"/></p>`
      );
  }, [video]);
  const navigate = useNavigate();
  const {getToken} = useAuth()
  const createPostMutation = useMutation({
    mutationFn: async(newPost)=>{
      const token = await getToken();
      return axios.post(`${apiUrl}/posts`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: (res)=>{
      toast.success({
        title: "Post created Successfully",
      });
      navigate(`/${res.data.slug}`);
    }

  })
  if (!isLoaded) {
    return <div className="">Loading...</div>;
  }
  if (isLoaded && !isSignedIn) {
    return <div className="">You should login</div>;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newPost = {
      img: cover.filePath || "default-image.jpeg",
      title: formData.get("title"),
      category: formData.get("category"),
      description: formData.get("description"),
      content,
    };

    createPostMutation.mutate(newPost);
  };
  return (
    <div className="md:h-[calc(100vh-80px)] h-[calc(100vh-64px)] flex flex-col gap-6 ">
      <h1 className="text-xl font-light">Create a new Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1 mb-6">
        <UploadButton type="image" setProgress={setProgress} setData={setCover}>
          <button
            type="button"
            className="p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white w-max "
          >
            Add a cover image
          </button>
        </UploadButton>
        <input
          type="text"
          name="title"
          placeholder="enter a title"
          className="text-4xl font-semibold bg-transparent outline-none"
        />
        <div className=" flex items-center gap-4">
          <label htmlFor="" className="text-sm ">
            Choose a category
          </label>
          <select
            name="category"
            id=""
            className="p-2 rounded-xl bg-white shadow-md"
          >
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea
          name="description"
          id=""
          placeholder="a short description"
          className="p-4 rounded-xl bg-white shadow-md"
        />
        <div className="flex flex-1">
          <div className="flex flex-col gap-2 mr-2">
            <UploadButton
              type="image"
              setProgress={setProgress}
              setData={setImg}
            >
              🌆
            </UploadButton>
            <UploadButton
              type="video"
              setProgress={setProgress}
              setData={setVideo}
            >
              ▶️
            </UploadButton>
          </div>
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            className="flex-1 rounded-xl bg-white shadow-md "
            name="content"
            readOnly={0 < progress && progress < 100}
          />
        </div>
        <button
          className="bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36 disabled:bg-blue-400 disabled:cursor-not-allowed"
          disabled={
            createPostMutation.isPending || (0 < progress && progress < 100)
          }
        >
          {createPostMutation.isPending ? "Loading..." : "Send"}
        </button>
        {"Progress " + progress}
        {createPostMutation.isError && (
          <span>{createPostMutation.error.message}</span>
        )}
      </form>
    </div>
  );
};
export default WritePage;
