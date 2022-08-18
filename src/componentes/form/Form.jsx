import React from "react";
import Input from "../input/Input";
import Label from "../label/Label";
import RadioInput from "../input/RadioInput";
import Button from "../buttons/Button";
import S from "./Form.module.css";

const inputLabel = [
  {
    text: "Seu nome:",
    type: "text",
    key: 1,
    style: S.input,
  },
  {
    text: "E-mail:",
    type: "text",
    key: 2,
    style: S.input,
  },
  {
    text: "CPF:",
    type: "text",
    key: 3,
    style: S.input,
  },
];
const radioInput = [
  {
    text: "Masculino",
    type: "radio",
    key: 4,
    style: "",
  },
  {
    text: "Feminino",
    type: "radio",
    key: 5,
    style: "",
  },
];

const Form = () => {
  return (
    <form>
      {inputLabel.map((item) => (
        <div>
          <Label text={item.text} />
          <Input style={item.style} type={item.type} key={item.key} />
        </div>
      ))}
      {radioInput.map((item) => (
        <div>
          <Input type={item.type} />
          <Label text={item.text} />
        </div>
      ))}
      <Button style={S.buttonForm} text={"Enviar"} />
    </form>
  );
};

export default Form;
