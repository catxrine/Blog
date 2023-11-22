import Tags from "../components/Tags";
import Input from "../components/Input";
import { useState } from "react";

export default function Settings() {
  const [show, setShow] = useState(false);
  return (
    <div className="">
      <div className="flex justify-between mx-auto">
        <div className="w-full">
          <div className="flex flex-col justify-center items-center">
            <form className="mx-5 my-5">
              <div className="flex flex-col">
                <label>Username</label>
                <input
                  className="input-variant-3 "
                  spellCheck="false"
                  placeholder="catxrin"
                />
              </div>
              <div className="my-4 flex flex-col">
                <label>Bio</label>
                <textarea
                  className="input-variant-3 h-60"
                  spellCheck="false"
                  placeholder="Tell us something about yourself"
                ></textarea>
              </div>
              <div className="flex flex-row">
                <h1 className="text-2xl mb-4 font-semibold mt-2">Interests</h1>
                <div>
                  <span
                    onClick={() => setShow(!show)}
                    className="material-symbols-outlined cursor-pointer px-1 font-semibold text-base bg-green-100 rounded-full"
                  >
                    add
                  </span>
                </div>
              </div>
              <div className="flex flex-row gap-2">
                <Tags label="Discrete Math" />
                <Tags label="Topology" />
                <Tags label="Neural Nets" />
              </div>
              {show && <Input />}
              <button className="btn-variant-2">Save Changes</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
