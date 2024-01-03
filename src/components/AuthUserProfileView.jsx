import { useState } from "react";
import NewPost from "./Posts/NewPost";

export default function AuthUserProfileView() {
  const [show, setShow] = useState(false);
  return (
    <div>
      {show ? (
        <NewPost setShow={setShow} />
      ) : (
        <div
          className={`overflow-y-auto rounded-lg w-[20vw] sm:w-full h-[85vh] py-2 flex flex-col bg-gray-50 mb-10`}
        >
          <div className="flex flex-row gap-1 justify-center">
            <div className="flex flex-row mt-1 gap-10">
              <h2 className="label-primary underline cursor-pointer">
                Approved
              </h2>
              <div>
                <span
                  onClick={() => setShow(!show)}
                  className="material-symbols-outlined cursor-pointer px-1 font-semibold text-green-800 text-base bg-green-200 rounded-full"
                >
                  add
                </span>
              </div>
              <h2 className="label-primary cursor-pointer">Pending</h2>
            </div>
          </div>
          <hr className="m-0 p-0" />

          <div className="flex flex-row flex-wrap mt-5 pb-5">posts</div>
        </div>
      )}
    </div>
  );
}
