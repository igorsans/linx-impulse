import React from "react";
import Title from "../title/Title";
import P from "../pe/P";
import Button from "../buttons/Button";
import S from "./Header.module.css";

const Header = () => {
  return (
    <header className={S.header}>
      <div>
        <Title style={S.intro} text={"uma seleção de produtos"} />
        <Title style={S.title} text={"especial para você"} />
        <P
          text={
            "Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!"
          }
        />
      </div>
      <div className={S.groupbuttons}>
        <Button style={S.button} text={"Conheça a Linx"} />
        <Button style={S.button} text={"Ajude o Algoritimo"} />
        <Button style={S.button} text={"Seus produtos"} />
        <Button style={S.button} text={"Compartilhe"} />
      </div>
    </header>
  );
};

export default Header;
