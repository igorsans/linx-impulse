import S from "./App.module.css";
import Article from "./componentes/articles/Article";
import Footer from "./componentes/footer/Footer";
import Form from "./componentes/form/Form";
import Header from "./componentes/header/Header";
import Poducts from "./componentes/Products/Poducts";
import Section from "./componentes/section/Section";
import Break from './componentes/break/Break'

function App() {
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
  const inputRadio = [
    {
      text: "Masculino",
      type: "radio",
      key: 4,
      style: S.inputRadio,
      radioDivStyle: S.radioDivStyle,
    },
    {
      text: "Feminino",
      type: "radio",
      key: 5,
      style: S.inputRadio,
      radioDivStyle: S.radioDivStyle,
    },
  ];
  const buttonForm = [
    {
      style: S.buttonForm,
      text: "Enviar",
    },
  ];
  const article = <Article style={S.article} />;
  const form = (
    <Form
      inputLabel={inputLabel}
      inputRadio={inputRadio}
      buttonForm={buttonForm}
      radioDivStyle={S.radioDivStyle}
    />
  );
  const introText = [
    {
      text: "Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!",
    },
  ];
  const inputLabelNewsLetter = [
    {
      text: "Nome do seu amigo:",
      type: "text",
      key: 1,
      style: S.inputLabelNewsLetter,
    },
    {
      text: "E-mail:",
      type: "text",
      key: 1,
      style: S.inputLabelNewsLetter,
    },
  ];
  const buttonNewsLetter = [
    {
      style: S.buttonFormNewsLetter,
      text: "Enviar",
    },
  ];
  const formNewsLetter = (
    <Form
      introText={introText}
      inputLabel={inputLabelNewsLetter}
      buttonForm={buttonNewsLetter}
      formStyle={S.formNewsStyle}
      formInputStyle={S.formInputStyle}
    />
  );


  return (
    <div>
      <Header />
      <Section style={S.section} compOne={article} compTwo={form} />
      <Break text={"Sua seleção especial"} />
      <Poducts/>
      <Break text={"Compartilhe a novidade"} />
      <Section style={S.section} compOne={formNewsLetter} />
      <Footer />
    </div>
  );
}

export default App;
