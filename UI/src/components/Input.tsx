import { InputProps, InputWithLabelProps } from "../types/componentPropsType";

export function Input({ type }: InputProps) {
  return (
    <input className="form-control" type={`${type ? type : "text"}`}></input>
  );
}

export function InputWithLabel({ children, type }: InputWithLabelProps) {
  return (
    <>
      <label htmlFor="input" style={{ textAlign: "left" }}>
        {children}
      </label>
      <Input type={type} />
    </>
  );
}
