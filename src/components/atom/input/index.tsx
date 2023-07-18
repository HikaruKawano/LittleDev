import React from "react";
import { StyleInput } from "./style";


interface props {
  inputtype?: string;
  width?: string;
  height?: string;
  placeholder?: string;
}

const Input: React.FC<props> = ({inputtype, width, height, placeholder}) => {
  return <StyleInput type={inputtype} width={width} height={height} placeholder={placeholder}/>;
};

export default Input;
