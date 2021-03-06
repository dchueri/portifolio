import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Sobre from "./components/sobre/Sobre";
import Experiencia from "./components/experiencia/Experiencia";
import Servicos from "./components/servicos/Servicos";
import Portifolio from "./components/portifolio/Portifolio";
import Contato from "./components/contato/Contato";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <Sobre />
      <Experiencia />
      <Servicos />
      <Portifolio />
      <Contato />
      <Footer />
    </>
  );
};

export default App;
