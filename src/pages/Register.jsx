import Input from "../components/Input";
import { HAVE_AN_ACCOUNT } from "../constants/messages";

export default function Register() {
  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-200">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              className="object-cover w-full h-full"
              src="./src/assets/login-office.jpeg"
            />
          </div>
          <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="label-primary">Register</h1>

              <Input label="Email" placeholder="example@gmail.com" />
              <Input label="Username" placeholder="Enter your username" />

              <Input label="Password" placeholder="●●●●●●●●●" type="password" />
              <Input
                label="Repeat Password"
                placeholder="●●●●●●●●●"
                type="password"
              />

              <button className="btn-variant-1">Register</button>

              <hr className="mt-5" />

              <a
                href="/"
                className="text-sm font-medium text-purple-600 hover:underline"
              >
                {HAVE_AN_ACCOUNT}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
