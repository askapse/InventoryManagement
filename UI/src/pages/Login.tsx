import { InputWithLabel } from "../components/Input";
import Button from "../components/Button";

function Login() {
  return (
    <div className="border rounded m-2 p-2 w-1" style={{ width: "400px" }}>
      <InputWithLabel>Username</InputWithLabel>
      <InputWithLabel>Password</InputWithLabel>
      <div className="text-center">
        <Button className="mt-3 align-center text-center">Login</Button>
      </div>
      <div className="mx-auto w-75">
        Don't have account? <a className="link-primary">Register now</a>
      </div>
    </div>
  );
}

export default Login;
