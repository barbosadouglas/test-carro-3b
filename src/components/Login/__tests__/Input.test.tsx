import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Input from "../Input";

//descrição de um grupoo de testes, para o componente input
describe("Input Component", () => {
  //verificar se o input é renderizado corretamente
  it("renders correctly", () => {
    //renderizar o componente input, extrair a função getByPlaceholderText
    //permite buscar elementos pelo texto do placeholder
    const { getByPlaceholderText } = render(
      //Renderiza o componente passando propriedades para o teste
      <Input setCharacters={() => {}} characters="" placeholder="Enter text" />
    );
    //obtem o elemento de input pelo texto do placeholder
    const inputElement = getByPlaceholderText("Enter text");
    //verificar se o elemento de input existe.
    expect(inputElement).toBeDefined();
  });
  //Verificar se a função setCharacters é chamada e alterar input
  it("updates characters correctly", () => {
    const setCharactersMock = jest.fn(); //funcao simulada pelo jest

    const { getByPlaceholderText } = render(
      <Input
        setCharacters={setCharactersMock}
        characters=""
        placeholder="Enter text"
      />
    );
    //obtem elemento de input pelo texto do placeholder
    const inputElement = getByPlaceholderText("Enter text");
    //evento simulado para alterar o texto para Hello
    fireEvent.changeText(inputElement, "Hello");
    //verificar se a funcao foi chamada e o texto alterado.
    expect(setCharactersMock).toHaveBeenCalledWith("Hello");
  });
});
