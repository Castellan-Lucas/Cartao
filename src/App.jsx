import React, { useState } from "react";
import Banner from "./Components/Banner";
import Formulario from "./Components/Formulario";
import Obrigado from "./Components/Obrigado";
import "../src/styleApp.sass";

function App() {
  const [estado, setEstado] = useState(false);

  const handleFormSubmit = () => {
    setEstado(true);
  };

  return (
    <>
      {/* logica que ao enviar formulario ele troca o state e exibe outro componente */}
      <div className="container-app">
        <Banner />
        <div>
          {!estado ? (
            <Formulario onFormSubmit={handleFormSubmit} />
          ) : (
            <div className="conteudo-submit">
              <Obrigado />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
