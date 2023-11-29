import Comments from "./Comments";

export default function CommentsDialog({ setShow }) {
  return (
    <div className="bg-[#000000ac] w-screen h-screen absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="shadow-md bg-white rounded">
          <div className="p-3 w-full flex flex-row justify-between">
            <h4>Comments</h4>
            <span
              onClick={() => setShow(false)}
              className="material-symbols-outlined text-red-800 cursor-pointer text-3xl"
            >
              cancel
            </span>
          </div>
          <hr className="m-0 p-0" />
          <ul className="list-unstyled px-5 py-3 gap-5 flex flex-col overflow-y-auto h-[50vh]">
            <Comments />
          </ul>
          <hr />
          <form className="w-full bg-white px-5 pb-3">
            <h2 className=" text-gray-800 text-lg">Add a new comment</h2>
            <div className="w-full flex flex-row">
              <textarea
                className="bg-gray-100 rounded-l border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                name="body"
                placeholder="Type Your Comment"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-blue-50 text-blue-700 font-medium py-1 px-4 border border-blue-400 rounded-r-lg tracking-wide mr-1 hover:bg-blue-100"
              >
                Post Comment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
