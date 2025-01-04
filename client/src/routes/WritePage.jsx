import { useUser } from "@clerk/clerk-react";
import { useState } from "react";
import ReactQuill from "react-quill-new";
const WritePage = () => {
  const { isLoaded, isSignedIn } = useUser();
  const [content, setContent] = useState("")
  if (!isLoaded) {
    return <div className="">Loading...</div>;
  }
  /*if (isLoaded && !isSignedIn) {
    return <div className="">You should login</div>;
  }*/
  return (
    <div className="md:h-[calc(100vh-80px)] h-[calc(100vh-64px)] flex flex-col gap-6 ">
      <h1 className="text-xl font-light">Create a new Post</h1>
      <form action="" className="flex flex-col gap-6 flex-1 mb-6">
        <button className="p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white w-max ">
          Add a cover image
        </button>
        <input
          type="text"
          name=""
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
        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          className="flex-1 rounded-xl bg-white shadow-md "
        />
        <button className="bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36">
          Send
        </button>
      </form>
    </div>
  );
};
export default WritePage;
