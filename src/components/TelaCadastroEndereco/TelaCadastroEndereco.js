import { useState } from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
} from "../TelaCadastro/styled";

function TelaCadastroEndereco(props) {
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [telefone, setTelefone] = useState("");

  const imprimirEndereco = (e) => {
    setEndereco(e.target.value);
  };

  const imprimirNumero = (e) => {
    setNumero(e.target.value);
  };

  const imprimirComplemento = (e) => {
    setComplemento(e.target.value);
  };

  const imprimirTelefone = (e) => {
    setTelefone(e.target.value);
  };

  const dadosConsole = {
    endereco,
    numero,
    complemento,
    telefone,
  };
  console.log(dadosConsole, "Tela de Cadastro de Endereço");

  return (
    <FormContainer>
      <h1>Cadastrar Endereço</h1>

      <Form>
        <StyledLabel htmlFor="endereco">
          Endereço:
          <Input id="endereco" onChange={imprimirEndereco} />
        </StyledLabel>

        <StyledLabel htmlFor="numero">
          Número da residência:
          <Input id="numero" onChange={imprimirNumero} />
        </StyledLabel>

        <StyledLabel htmlFor="complemento">
          Complemento:
          <Input id="complemento" onChange={imprimirComplemento} />
        </StyledLabel>

        <StyledLabel htmlFor="fone">
          Telefone:
          <Input id="fone" onChange={imprimirTelefone} />
        </StyledLabel>

        <SendButton
          onClick={() => {
            props.mudarTela("TelaPrincipal");
          }}
        >
          Confirmar
        </SendButton>
      </Form>
    </FormContainer>
  );
}

export default TelaCadastroEndereco;
