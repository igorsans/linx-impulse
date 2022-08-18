import Title from "../title/Title";
import P from "../pe/P";
import Button from "../buttons/Button";
import S from "./Header.module.css";

const Header = () => {
  const buttons = [
    {
      text: "Conheça a Linx" 
    },
    {
     text: "Ajude o Algoritimo"
    },
   {
     text: "Seus produtos" 
    },
   {
     text: "Compartilhe"
    },
  ]
  
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
          {buttons.map(buttons => <Button style={S.button} text={buttons.text}/>)}
      </div>
    </header>
  );
};

export default Header;
