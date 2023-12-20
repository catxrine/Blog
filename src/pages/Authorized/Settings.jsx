import { useForm } from "react-hook-form";
import Input from "../../components/Inputs/Input";

export default function Settings() {
  const { register, handleSubmit } = useForm();
  return (
    <div className="flex justify-between mx-auto">
      <div className="w-full">
        <div className="flex flex-col justify-center items-center">
          <form onSubmit={handleSubmit()} className="mx-5 my-3">
            <h2 className="text-center">Settings</h2>
            <div className="flex flex-col gap-2">
              <Input
                label="Username"
                style="input-variant-3"
                name="username"
                placeholder="user's current username"
                register={register}
              />
              <Input
                style="input-variant-3"
                register={register}
                label="Email"
                name="email"
                placeholder="user's email"
              />
              <div className="flex flex-col">
                <label>Bio</label>
                <textarea
                  {...register("bio")}
                  className="input-variant-3 h-60"
                  spellCheck="false"
                  placeholder="Tell us something about yourself"
                ></textarea>
              </div>
              <button className="btn-variant-2 my-4">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
