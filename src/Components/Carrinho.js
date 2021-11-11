import React from "react";
import styled from "styled-components";
import {Produtos} from "./Produtos"

const ContainerCarrinho = styled.div`
display: flex;
flex-direction: column;
border: 1px solid black;
height: 100vh;
`
export default class Carrinho extends React.Component {
  state = {
    carrinho: []
  }

  adicionarNoCarrinho = (id) => {
    const produtos = viagens.filter(viagem => {
      return viagem.id === id
    })

    const arrayCarrinho = [...this.state.viagens, produtos[0]]
    this.setState({
      carrinho: arrayCarrinho
    })
  }

    render() {
      const lista = viagem.map(produto => {
        return <div>
          <p>{produto.id}</p>
          <button onClick= {() => this.adicionarNoCarrinho(viagens.id)}></button>
        </div>
      })
      return (
        <ContainerCarrinho>
            {lista}
            {this.state.carrinho.map(produto => {
        return <div>
          <p>{produto.id}</p>
          </div>
            })}
        </ContainerCarrinho>
      );
    }
  }