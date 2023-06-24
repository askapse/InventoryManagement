import Button from "../components/Button";
import { InputWithLabel } from "../components/Input";

function Register() {
  return (
    <div className="border rounded m-2 p-2 w-1" style={{ width: "400px" }}>
      <InputWithLabel>Name</InputWithLabel>
      <InputWithLabel>E-mail</InputWithLabel>
      <InputWithLabel>Mobile</InputWithLabel>
      <InputWithLabel type="password">Password</InputWithLabel>
      <div className="row w-75 mx-auto">
        <Button className="col m-2">Register</Button>
        <Button className="col m-2">Reset</Button>
      </div>
      <div className="mx-auto w-75">
        Already have account?{" "}
        <a style={{ color: "blue" }} className={"link-primary"}>
          login
        </a>
      </div>
    </div>
  );
}

export default Register;
