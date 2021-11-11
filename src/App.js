import React from 'react';
import styled from 'styled-components';
import Produtos from './Components/Produtos';
import Filtro from './Components/Filtro';
import Carrinho from './Components/Carrinho';
import Card from './Components/Card';
import ItemCarrinho from './Components/ItemCarrinho'
import lua from './img/lua.jpeg';
import europa from './img/europa.jpeg';
import marte from './img/marte.jpeg';
import plutao from './img/plutao.jpg';
import titan from './img/titan.jpeg';
import venus from './img/venus.jpeg';

// App
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

//Produto

const ContainerProdutos = styled.div`
display: grid;
grid-template-rows: 1fr 1fr;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 30px 30px;
/* width: 60vw; */
border: 1px solid black;
`
const HeaderProdutos = styled.div`
display: flex;
justify-content: space-between;
`
const Ordenacao = styled.div`
display:flex;
align-items: center;
`

// Carrinho 

const ContainerCarrinho = styled.div`
display: flex;
flex-direction: column;
border: 1px solid black;
height: 100vh;
`

// filtro 

const ContainerFiltro = styled.div`
display: flex;
flex-direction: column;
border: 1px solid black;
height: 100vh;

input {
width: 50%;
margin-bottom: 30px;
}
`
// item carrinho

const CarrinhoItem = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

export default class App extends React.Component {
  state = {
    valorMinimo: '',
    valorMaximo: '',
    produtoBusca: '',
    quantidade: '',
    ordenacao: 'crescente',
    viagens: [
      {
        id: 1,
        imagem: lua,
        nomeCard: "Lua",
        valor: 10000
      }, {
        id: 2,
        imagem: europa,
        nomeCard: "Europa",
        valor: 20000
      }, {
        id: 3,
        imagem: plutao,
        nomeCard: "Plutão",
        valor: 30000
      }, {
        id: 4,
        imagem: marte,
        nomeCard: "Marte",
        valor: 40000
      }, {
        id: 5,
        imagem: titan,
        nomeCard: "Titan",
        valor: 50000
      }, {
        id: 6,
        imagem: venus,
        nomeCard: "Venus",
        valor: 60000
      }
    ]
  }

  InputValorMinimo = (event) => {
    this.setState({
      valorMinimo: event.target.value
    })
  }

  InputValorMaximo = (event) => {
    this.setState({
      valorMaximo: event.target.value
    })
  }

  InputProdutoBusca = (event) => {
    this.setState({
      produtoBusca: event.target.value
    })
  }

  


    render() {

      const listaDeViagens = this.state.viagens.map((viagem) => {
        return (
          < Card
            imagem={viagem.imagem}
            nomeCard={viagem.nomeCard}
            valor={viagem.valor}
          />
        )
      })

      return (
        <ContainerPrincipal>
          <header> </header>
          <ContainerHome>
            <ContainerFiltro>
              <h2> Filtros </h2>
              <label>Valor mínimo:</label>
              <input
                value={this.state.valorMinimo}
                type="number" onChange={this.InputValorMinimo}

              />
              <label>Valor máximo:</label>
              <input
                value={this.state.valorMaximo}
                type="number" onChange={this.InputValorMaximo}
              />
              <label>Buscar por nome:</label>
              <input
                value={this.state.produtoBusca}
                type="text" onChange={this.InputProdutoBusca}
              />
            </ContainerFiltro>
            <div>
              <HeaderProdutos>
                <div>
                  <p>Quantidade de produtos: 5</p>
                </div>
                <Ordenacao>
                  <label>Ordenação:</label>
                  <select>
                    <option>Crescente</option>
                    <option>Decrescente</option>
                  </select>
                </Ordenacao>
              </HeaderProdutos>
              <ContainerProdutos>
                {this.state.viagens.filter((item) => {
                  return item.nomeCard.toLowerCase().includes(this.state.produtoBusca.toLowerCase())
                })

                .filter((item) => {
                  return this.state.valorMinimo === '' || item.valor >= this.state.valorMinimo
                })
                
                .filter((item) => {
                  return this.state.valorMaximo === '' || item.valor <= this.state.valorMaximo
                })
                
                .map((item) => {
                  return (
                  <Card
                  imagem= {item.imagem}
                  nomeCard={item.nomeCard}
                  valor={item.valor}
                  />
                  )
                })}
              </ContainerProdutos>
            </div>
            <ContainerCarrinho>
              <h2>Carrinho:</h2>
              <CarrinhoItem>
                <p>1x</p>
                <p>Produto 1</p>
                <button> Remover </button>
              </CarrinhoItem>
              <p>Valor Total: R$</p>
            </ContainerCarrinho>
          </ContainerHome>
          <footer></footer>
        </ContainerPrincipal>
        
      );
    }
  }


