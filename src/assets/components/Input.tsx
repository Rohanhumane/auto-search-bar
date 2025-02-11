import React from "react";
import classes from "./Input.module.css";

type InputProps = {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  onBlur: () => void;
  onFocus: () => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = (props) => {
  return <input className={classes.search} {...props}></input>;
};

export default Input;
