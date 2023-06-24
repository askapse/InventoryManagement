import { ButtonProps } from "../types/componentPropsType";

function Button({ color, children, onClick, className }: ButtonProps) {
  return (
    <button
      className={`btn btn-${color ? color : "primary"} ${
        className ? className : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
