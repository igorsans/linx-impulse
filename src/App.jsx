// import './App.css'
import Break from './componentes/break/Break'
import Footer from './componentes/footer/Footer'
import Header from './componentes/header/Header'
import Section from './componentes/section/Section'


function App() {

  return (
    <div>
      <Header/>
      <Section/>
      <Break text={"Sua Seleção especial"}/>
      <Break text={"Compartilhe a novidade"}/>
      <Footer/>
    </div>
  )
}

export default App
