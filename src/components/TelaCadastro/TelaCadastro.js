import {
  Form,
  FormContainer,
  Input,
  StyledLabel,
  SendButton,
  BackToLoginButton,
} from "./styled";
import { useState } from "react";

function TelaCadastro(props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirma, setConfirma] = useState("");

  const cadastrar = () => {
    // fluxo de cadastro (ainda veremos)
    props.mudarTela("TelaPrincipal");
  };

  const mostrarTelaLogin = () => {
    props.mudarTela("TelaLogin");
  };

  const imprimirNome = (e) => setNome(e.target.value);

  const imprimirEmail = (e) => setEmail(e.target.value);

  const imprimirSenha = (e) => setSenha(e.target.value);

  const imprimirConfirma = (e) => setConfirma(e.target.value);

  const imprimirDados = {
    nome: nome,
    email: email,
    senha: senha,
    confirma: confirma,
  };
  console.log(imprimirDados, "Tela de Cadastro");

  return (
    <FormContainer>
      <h1>Cadastro </h1>

      <Form>
        <StyledLabel htmlFor="name">
          Nome:
          <Input id="name" onChange={imprimirNome} />
        </StyledLabel>

        <StyledLabel htmlFor="email">
          E-mail:
          <Input id="email" onChange={imprimirEmail} />
        </StyledLabel>

        <StyledLabel htmlFor="senha">
          Senha:
          <Input id="senha" onChange={imprimirSenha} />
        </StyledLabel>

        <StyledLabel htmlFor="confirmasenha">
          Confirmação da senha:
          <Input id="confirmasenha" onChange={imprimirConfirma} />
        </StyledLabel>

        <SendButton
          onClick={() => {
            props.mudarTela("TelaCadastroEndereco");
          }}
        >
          Cadastrar
        </SendButton>

        <BackToLoginButton onClick={mostrarTelaLogin}>
          Já possuo cadastro
        </BackToLoginButton>
      </Form>
    </FormContainer>
  );
}

export default TelaCadastro;
