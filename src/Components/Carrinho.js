import React from "react";
import styled from "styled-components";

const ContainerCarrinho = styled.div`
display: flex;
flex-direction: column;
border: 1px solid black;
height: 100vh;
`
export default class Carrinho extends React.Component {

    render() {
      return (
        <ContainerCarrinho>
            <h2>Carrinho:</h2>
            <p>Valor Total: R$</p>
        </ContainerCarrinho>
      );
    }
  }