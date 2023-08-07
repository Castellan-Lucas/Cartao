import React, { useState } from "react";
import Cardback from "../Cardback";
import CardFront from "../Cardfront";
import "../Formulario/Formulario.sass";
import Obrigado from "../Obrigado";


export default function Formulario() {
  const [nomec, setNome] = useState("");
  const [nmCartao, setNmCartao] = useState("");
  const [data, setData] = useState("");
  const [cvc, setCvc] = useState("");
  const [mostrarObrigado, setMostrarObrigado] = useState(false);

   const date = {
     nomec,
     nmCartao,
     data,
     cvc,
   };

  const onSubmit = (e) => {
    e.preventDefault();
   

    if (!nomec || !nmCartao || !data || !cvc) {
      alert("Preencha todos os campos obrigatórios!");
    } else {
      setMostrarObrigado(true);
      setNome("");
      setNmCartao("");
      setData("");
      setCvc("");
      enviarls("Valores",JSON.stringify(date))
    
      
    }
    console.log(date)
  };
    const enviarls = (chave, valor) => {
      localStorage.setItem(chave, valor);
    };


  return (
    <div>
      <div className="engloba">
        <div className="conteudo-front">
          <CardFront nome={nomec} data={data} nmCartao={nmCartao} />
        </div>
        <div className="conteudo-back">
          <Cardback cvc={cvc} />
        </div>
      </div>
      {!mostrarObrigado ? (
        <form
          id="card-cartao-form"
          className="container-form"
          onSubmit={onSubmit}
        >
          <div className="conteudo-form">
            <label>Nome do cartão </label>
            <input
              type="text"
              className="nome"
              placeholder="Digite o nome"
              value={nomec}
              onChange={(event) => setNome(event.target.value)}
            />

            <label>Número do cartão</label>
            <input
              type="text"
              className="nome"
              placeholder="Digite o numero do cartão"
              maxLength={16}
              value={nmCartao}
              onChange={(event) => setNmCartao(event.target.value)}
            />

            <div className="date-container">
              <input
                type="text"
                className="cvc"
                placeholder="CVC"
                maxLength={3}
                value={cvc}
                onChange={(event) => setCvc(event.target.value)}
              />
              <label>Exp. Date</label>
              <input
                type="date"
                className="date"
                placeholder="MM"
                value={data}
                onChange={(event) => setData(event.target.value)}
              />
            </div>
            <button onClick={enviarls} type="submit">
              Enviar
            </button>
          </div>
        </form>
      ) : (
        <Obrigado />
      )}
    </div>
  );
}
