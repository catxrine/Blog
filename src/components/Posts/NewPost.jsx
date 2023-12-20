export default function NewPost({ setShow }) {
  return (
    <div className="rounded mb-10 mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 max-w-2xl">
      <input
        className="title rounded bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
        spellCheck="false"
        placeholder="Title"
      />
      <textarea
        className="rounded bg-gray-100 p-3 h-60 border border-gray-300 outline-none"
        spellCheck="false"
        placeholder="Describe everything about this post here"
      ></textarea>

      <div className="flex mt-4">
        <div
          onClick={() => setShow(false)}
          className="border border-gray-300 p-1 px-4 font-semibold cursor-pointer rounded ml-auto"
        >
          Cancel
        </div>
        <div className="border p-1 px-4 font-semibold cursor-pointer text-white rounded ml-2 bg-indigo-500">
          Post
        </div>
      </div>
    </div>
  );
}
