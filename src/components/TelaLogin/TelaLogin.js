import { useState } from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
  RegisterButton,
} from "./styled";

function TelaLogin(props) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const login = () => {
    // fluxo de login (ainda veremos)
    props.mudarTela("TelaPrincipal");
  };

  const mostrarTelaCadastro = () => {
    props.mudarTela("TelaCadastro");
  };

  const imprimirEmail = (event) => {
    setEmail(event.target.value);
  };

  const imprimirSenha = (event) => {
    setSenha(event.target.value);
  };
  const pegarDados = {
    email: email,
    senha: senha,
  };
  console.log(pegarDados, "Tela de Login");
  return (
    <FormContainer>
      <h1>LOGIN</h1>

      <Form>
        <StyledLabel>
          E-mail:
          <Input onChange={imprimirEmail} />
        </StyledLabel>

        <StyledLabel>
          Senha:
          <Input type={"password"} onChange={imprimirSenha} />
        </StyledLabel>

        <SendButton onClick={login}>Entrar</SendButton>

        <RegisterButton onClick={mostrarTelaCadastro}>
          Cadastre-se
        </RegisterButton>
      </Form>
    </FormContainer>
  );
}

export default TelaLogin;
