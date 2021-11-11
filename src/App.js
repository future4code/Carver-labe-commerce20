import React from 'react';
import styled from 'styled-components';
import Produtos from './Components/Produtos';
import Filtro from './Components/Filtro';
import Carrinho from './Components/Carrinho';

const ContainerPrincipal = styled.div`
display: grid;
grid-template-rows: 60px 1fr 60px;

header{
  background-color: yellow;
}

footer{
  background-color: yellow;
}
`
const ContainerHome = styled.div`
display: grid;
grid-template-columns: 20vw 1fr 20vw;
`

export default class App extends React.Component {

  render() {

    return (
      <ContainerPrincipal>
        <header> </header>
        <ContainerHome>
          <Filtro />
          <Produtos />
          <Carrinho />
        </ContainerHome>
        <footer></footer>
      </ContainerPrincipal>
    );
  }
}


