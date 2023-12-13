import Input from "../../components/Inputs/Input";
import {
  CREATE_ACCOUNT,
  EMAIL_EXAMPLE,
  PASSWORD_PLACEHOLDER,
} from "../../utils/messages.js";
import { Link } from "react-router-dom";

export default function Login() {
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
              <h1 className="label-primary">Login</h1>
              <Input label="Email" placeholder={EMAIL_EXAMPLE} />
              <Input
                label="Password"
                placeholder={PASSWORD_PLACEHOLDER}
                type="password"
              />
              <button className="btn-variant-1">Log in</button>
              <hr className="mt-5" />
              <Link
                to="/register"
                className="text-sm font-medium text-purple-600 hover:underline"
              >
                {CREATE_ACCOUNT}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
