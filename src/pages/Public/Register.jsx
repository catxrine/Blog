import { Link } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import { useForm } from "react-hook-form";
import { registerUser } from "../../services/User.js";
import { useState } from "react";

import {
  HAVE_AN_ACCOUNT,
  EMAIL_EXAMPLE,
  PASSWORD_PLACEHOLDER,
} from "../../utils/messages.js";

export default function Register() {
  const { register, handleSubmit } = useForm();
  const [errorMessage, setErrorMessage] = useState("");

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
              <form
                onSubmit={handleSubmit((e) =>
                  registerUser(
                    {
                      name: e.username,
                      email: e.email,
                      password: e.password,
                      repeatPassword: e.c_password,
                    },
                    setErrorMessage
                  )
                )}
              >
                <Input
                  register={register}
                  label="Email"
                  name="email"
                  placeholder={EMAIL_EXAMPLE}
                />
                <Input
                  register={register}
                  label="Username"
                  name="username"
                  placeholder="Enter your username"
                />

                <Input
                  register={register}
                  label="Password"
                  name="password"
                  placeholder={PASSWORD_PLACEHOLDER}
                  type="password"
                />
                <Input
                  register={register}
                  label="Repeat Password"
                  name="c_password"
                  placeholder={PASSWORD_PLACEHOLDER}
                  type="password"
                />

                <button type="submit" className="btn-variant-1">
                  Register
                </button>
              </form>
              {errorMessage.length > 0 &&
                errorMessage.map((message) => (
                  <>
                    <p className="text-red-500 m-0">{message}</p>
                  </>
                ))}
              <hr className="mt-3" />
              <Link
                to="/login"
                className="text-sm font-medium text-purple-600 hover:underline"
              >
                {HAVE_AN_ACCOUNT}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
