import React from "react";
import renderer from "react-test-renderer";
import IconLogin from "../IconLogin";
//teste snapshot do jest, para garantir a renderização do componente
describe("IconLogin Component", () => {
  //Verificar se o componente é renderizado corretamente
  it("renders correctly", () => {
    //Criar uma instancia do componente IconLogin com uma função click simulada
    const tree = renderer.create(<IconLogin click={() => {}} />).toJSON();
    //Uso do snapshot para verificar se as renderizações são iguais.
    expect(tree).toMatchSnapshot();
  });
});
