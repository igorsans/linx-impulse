import React from "react";
import Button from "../buttons/Button";
import Input from "../input/Input";
import Label from "../label/Label";
import P from "../pe/P";

const Form = ({
  introText,
  inputLabel,
  inputRadio,
  buttonForm,
  radioDivStyle,
  formStyle,
  formInputStyle,
}) => {
  return (
    <form className={formStyle}>
      <div>
        {introText ? introText.map((item) => <P text={item.text} />) : ""}
      </div>
      <div className={formInputStyle}>
        {inputLabel
          ? inputLabel.map((item) => (
              <div className={item.divStyle}>
                <Label text={item.text} />
                <Input key={item.key} style={item.style} type={item.type}  />
              </div>
            ))
          : ""}
      </div>
      <div className={radioDivStyle}>
        {inputRadio
          ? inputRadio.map((item) => (
              <div className={item.radioDivStyle}>
                <Input style={item.style} type={item.type} key={item.key} />
                <Label text={item.text} />
              </div>
            ))
          : ""}
      </div>
      {buttonForm
        ? buttonForm.map((item) => (
            <Button style={item.style} text={item.text} />
          ))
        : ""}
    </form>
  );
};

export default Form;
