import UserPost from "../../components/UserPost.jsx";
import Tags from "../../components/Tags.jsx";
import NewPost from "../../components/NewPost.jsx";
import { useState } from "react";

export default function Profile() {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col justify-center m-auto items-center">
      <section className="mb-5 shadow-sm shadow-gray-200 text-center bg-gray-50 p-4 rounded-lg w-[45vw]">
        <div className="mx-auto">
          <div className="text-center flex justify-center items-center">
            <div className="flex-grow text-center flex justify-center items-center flex-col">
              <h3 className="text-xl heading font-semibold">John Doe</h3>
              {/* <button
                onClick={() => setShow(!show)}
                className="px-2 py-1 font-semibold text-sm text-green-700 bg-green-100 rounded"
              >
                New Post
              </button> */}
              <p className=" mb-3">
                John is a Senior Developer, mainly works in backend
                technologies.
              </p>
              <div className="flex flex-row gap-2">
                <Tags label="Discrete Math" />
                <Tags label="Topology" />
                <Tags label="Neural Nets" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {show && <NewPost setShow={setShow} />}
      <div
        className={`overflow-y-auto rounded-lg w-[20vw] sm:w-full h-[74vh] py-2 px-3 flex flex-col bg-gray-50`}
      >
        <div className="flex flex-row gap-1 justify-center">
          <div className="flex flex-row gap-10">
            <h2 className="label-primary underline cursor-pointer">
              Approved
              <span className="material-symbols-outlined text-green-700">
                check_circle
              </span>
            </h2>
            <div>
              <span
                onClick={() => setShow(!show)}
                className="material-symbols-outlined cursor-pointer px-1 font-semibold text-green-800 text-base bg-green-200 rounded-full"
              >
                add
              </span>
            </div>
            <h2 className="label-primary cursor-pointer">
              Pending
              <span className="material-symbols-outlined text-blue-700">
                pending
              </span>
            </h2>
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-3 mt-5 pb-5">
          <UserPost
            author="catxrin"
            likes="1"
            title="Lorem Ipsum"
            description=" Aliquam a tristique sapien, nec bibendum urna. Maecenas convallis
                dignissim turpis, non suscipit mauris interdum at. Morbi sed gravida
                nisl, a pharetra nulla. Etiam tincidunt turpis leo, ut mollis ipsum
                consectetur quis. Etiam faucibus est risus, ac condimentum mauris
                consequat nec. Curabitur eget feugiat massa. Morbi sed gravida
                nisl, a pharetra nulla.🌙"
          />
          <UserPost
            author="catxrin"
            likes="0"
            title="Lorem Ipsum"
            description=" Aliquam a tristique sapien, nec bibendum urna. Maecenas convallis
            dignissim turpis, non suscipit mauris interdum at. Morbi sed gravida
            nisl, a pharetra nulla. Etiam tincidunt turpis leo, ut mollis ipsum
            consectetur quis. Etiam faucibus est risus, ac condimentum mauris
            consequat nec. Curabitur eget feugiat massa"
          />
          <UserPost
            author="catxrin"
            likes="0"
            title="Lorem Ipsum"
            description=" Aliquam a tristique sapien, nec bibendum urna. Maecenas convallis
                dignissim turpis, non suscipit mauris interdum at. Morbi sed gravida
                nisl, a pharetra nulla."
          />
          <UserPost
            likes="2"
            author="catxrin"
            title="Lorem Ipsum"
            description=" Aliquam a tristique sapien, nec bibendum urna. Maecenas convallis
                dignissim turpis, non suscipit mauris interdum at. Morbi sed gravida
                nisl, a pharetra nulla. Etiam tincidunt turpis leo, ut mollis ipsum
                consectetur quis. Etiam faucibus est risus, ac condimentum mauris
                consequat nec. Curabitur eget feugiat massa. Etiam tincidunt turpis leo, ut mollis ipsum
                consectetur quis. Etiam faucibus est risus, ac condimentum mauris
                consequat nec. Curabitur eget feugiat massa"
          />
        </div>
      </div>
    </div>
  );
}
