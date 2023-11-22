import Input from "../components/Input";
import { CREATE_ACCOUNT } from "../constants/messages";
import {logIn} from "../services/User.js";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

export default function Login() {

  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleLogin = () => {
      try{
        logIn().then( (res) => {
          if(res.ok) {
            navigate('home');
          }
          throw new Error('login error');
        });
      }catch (e) {
        console.log(e);
        setError(e);
      }
  }
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
              <form>
                <Input label="Email" placeholder="example@gmail.com"/>
                <Input label="Password" placeholder="●●●●●●●●●" type="password" />
                <button className="btn-variant-1">Log in</button>
                <hr className="mt-5" />
                <button
                  href="/register"
                  className="text-sm font-medium text-purple-600 hover:underline"
                  onClick={handleLogin}
                >
                {CREATE_ACCOUNT}
              </button>
                {error && <>
                  <span className={'error'}>{error}</span>
                </>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
