import { MouseEventHandler } from "react";

export type ButtonProps = {
  color?: "primary" | "success" | "danger" | "link";
  className?: string;
  style?: React.CSSProperties;
  children: string;
  onClick?: MouseEventHandler;
};

type InputTypes = "radio" | "checkbox" | "password";
export type InputProps = {
  type?: InputTypes;
};

export type InputWithLabelProps = {
  children: string;
  type?: InputTypes;
};
