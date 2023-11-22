import { useState } from "react";
import Comments from "./Comments";

export default function UserPost({ author, title, description, likes }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="flex items-center justify-center mt-3">
        <div className="rounded-xl border p-5 shadow-md w-[800px] bg-white">
          <div className="flex w-full items-center justify-between border-b pb-3">
            <div className="flex w-full items-center flex-row justify-between space-x-3">
              <div className="text-base font-bold text-slate-700">{author}</div>
              <span className="material-symbols-outlined cursor-pointer text-1xl text-red-700">
                delete
              </span>
            </div>
          </div>

          <div className="mt-4 mb-6">
            <div className="mb-3 text-lg font-bold">{title}</div>
            <div className="text-sm text-neutral-600">{description}</div>
          </div>

          <div className="flex items-center justify-between text-slate-500">
            <div className="flex space-x-4 md:space-x-8">
              <div
                onClick={() => setShow(!show)}
                className="flex gap-1 cursor-pointer items-center transition hover:text-slate-600"
              >
                <span className="material-symbols-outlined">chat</span>
                <span>3</span>
              </div>
              <div className="flex gap-1 cursor-pointer items-center transition hover:text-slate-600">
                <span className="material-symbols-outlined">thumb_up</span>
                <span>{likes}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {show && <Comments setShow={setShow} />}
    </>
  );
}
