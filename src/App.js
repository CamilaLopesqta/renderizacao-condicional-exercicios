import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaPrincipal from "./components/TelaPrincipal/TelaPrincipal.js";
import TelaCadastroEndereco from "./components/TelaCadastroEndereco/TelaCadastroEndereco";

const GlobalStyled = createGlobalStyle`
  html {
    font-family: sans-serif9;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;
const MainContainer = styled.main`
  height: 100vh;
`;

function App() {
  const [telaAtual, setTelaAtual] = useState("TelaLogin");

  const mudarTela = (novaTela) => {
    setTelaAtual(novaTela);
  };

  return (
    <MainContainer>
      <GlobalStyled />
      {telaAtual === "TelaLogin" && <TelaLogin mudarTela={mudarTela} />}
      {telaAtual === "TelaCadastro" && <TelaCadastro mudarTela={mudarTela} />}
      {telaAtual === "TelaCadastroEndereco" && (
        <TelaCadastroEndereco mudarTela={mudarTela} />
      )}
      {telaAtual === "TelaPrincipal" && <TelaPrincipal mudarTela={mudarTela} />}
    </MainContainer>
  );
}

export default App;
