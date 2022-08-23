import React from "react";

const Button = ({ text , style, func}) => {
  return <button onClick={func} className={style}>{text}</button>
};

export default Button;
