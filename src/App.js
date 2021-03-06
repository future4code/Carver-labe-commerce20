import React from 'react';
import styled from 'styled-components';
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
grid-template-rows: 50px 1fr 50px;
margin: 0;
padding: 0;
margin-bottom: -50vw;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;



header{
  background-color: #000080;
  color: white;
  font-size: 30px;
  font-weight: bold;
  text-align: left;
  display: flex;
  align-items: center;
}

p{
  margin: 10px;
}

footer{
  background-color:  #000080;
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
`
const ContainerHome = styled.div`
display: grid;
grid-template-columns: 20vw 1fr 20vw;
`

//Produto

const ContainerProdutos = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(2, 2fr);
grid-column-gap: 1vw;
grid-row-gap: 1vh;
justify-items: center;
align-items: center;
background-color: #ffff;
color: black;
`

const HeaderProdutos = styled.div`
display: flex;
justify-content: space-between;
font-size: 15px;
`
const Ordenacao = styled.div`
display:flex;
align-items: center;
font-size: 15px;
`

// Carrinho 

const ContainerCarrinho = styled.div`
display: flex;
flex-direction: column;
border: 1px solid black;
height: 100%;
margin: 6px;
text-align: center;
`

// filtro 

const ContainerFiltro = styled.div`
display: flex;
flex-direction: column;
border: 1px solid black;
height: 100%;
margin: 6px;


input {
width: 50%;
margin-bottom: 30px;
margin: 10px;
}
`
// item carrinho

// const CarrinhoItem = styled.div`
// display: flex;
// justify-content: space-between;
// text-items: center;
// `

export default class App extends React.Component {
  state = {
    valorMinimo: '',
    valorMaximo: '',
    produtoBusca: '',
    ordenacao: 'crescente',
    viagens: [
      {
        id: 1,
        imagem: lua,
        nomeCard: "Lua",
        valor: 10500.00,
        quantidade: 1
      }, {
        id: 2,
        imagem: europa,
        nomeCard: "Europa",
        valor: 20800.00,
        quantidade: 1
      }, {
        id: 3,
        imagem: plutao,
        nomeCard: "Plut??o",
        valor: 20900.00,
        quantidade: 1
      }, {
        id: 4,
        imagem: marte,
        nomeCard: "Marte",
        valor: 10600.00,
        quantidade: 1
      }, {
        id: 5,
        imagem: titan,
        nomeCard: "Titan",
        valor: 50000.00,
        quantidade: 1
      }, {
        id: 6,
        imagem: venus,
        nomeCard: "Venus",
        valor: 10400.00,
        quantidade: 1
      }
    ],
    carrinho: []
  }

  adicionarNoCarrinho = (event) => {
    let viagensEscolhidas = this.state.viagens.filter((viagem) => {
      return event === viagem.id
    })

    let controleDoCarrinho = 0;
    let carrinhoCarregado = this.state.carrinho.map((item) => {
      if (event === item.id) {

        item.quantidade++
        controleDoCarrinho++
      }
      return item
    })

    if (controleDoCarrinho === 0) {
      this.setState({
        carrinho: [...this.state.carrinho, viagensEscolhidas[0]]
      })

    } else {
      this.setState({
        carrinho: carrinhoCarregado
      })
    }
  };

  removerDoCarrinho = (event) => {
    let controle = 0;

    let viagemNoCarrinho = this.state.carrinho.map((item) => {
      if (item.id === event && item.quantidade > 1) {
        controle++
        item.quantidade--
      }

      return item
    })

    if (controle === 0) {
      let carrinhoAtualizado = this.state.carrinho.filter((item) =>{
        return item.id !== event
      })
      this.setState({carrinho: carrinhoAtualizado})
    } else {
      this.setState({carrinho: viagemNoCarrinho})
    }
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

  OnChangeSeletor = (event) => {
    this.setState({
      ordenacao: event.target.value
    })
  }

  calculaTotal = (array) => {
    let total = 0

    for(let viagens of array){
      total += viagens.valor * viagens.quantidade
    }

    return total.toFixed(2)
  }

  render() {

    const produtos = this.state.viagens.filter((item) => {
      return item.nomeCard.toLowerCase().includes(this.state.produtoBusca.toLowerCase())
    })

      .filter((item) => {
        return this.state.valorMinimo === '' || item.valor >= this.state.valorMinimo
      })

      .filter((item) => {
        return this.state.valorMaximo === '' || item.valor <= this.state.valorMaximo
      })

      .sort((item1, item2) => {
        if (this.state.ordenacao === 'crescente') {
        return item1.valor - item2.valor 

        } else if (this.state.ordenacao === 'decrescente'){
          return item2.valor - item1.valor
        }
      })

      .map((item) => {
        return (
          <Card
            imagem={item.imagem}
            nomeCard={item.nomeCard}
            valor={item.valor}
            addViagem={() => this.adicionarNoCarrinho(item.id)}
            value={item.id}

          />
        )
      })


    return (
      <ContainerPrincipal>
        <header>
          <p>Labe-Ecommerce</p>
        </header>
        <ContainerHome>
          <ContainerFiltro>
            <h2> Filtros </h2>
            <label>Valor m??nimo:</label>
            <input
              value={this.state.valorMinimo}
              type="number" onChange={this.InputValorMinimo}

            />
            <label>Valor m??ximo:</label>
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
                <p>Quantidade de produtos: {produtos.length} </p>
              </div>
              <Ordenacao>
                <label>Ordena????o:</label>
                <select onChange={this.OnChangeSeletor}>
                  <option value="crescente">Crescente</option>
                  <option value="decrescente">Decrescente</option>
                </select>
              </Ordenacao>
            </HeaderProdutos>
            <ContainerProdutos>
              {produtos}
            </ContainerProdutos>
          </div>
          <ContainerCarrinho>
            <h2>Carrinho:</h2>

            {this.state.carrinho.map((item) => {
              return (
                <ItemCarrinho
                  viagemNome={item.nomeCard}
                  quantidadeCarrinho={item.quantidade}
                  excluiViagem={() => this.removerDoCarrinho(item.id)} />
              )
            })}
            <p>Valor Total: R${this.calculaTotal(this.state.carrinho)}</p>
          </ContainerCarrinho>
        </ContainerHome>
        <footer>
          <p>Grupo 20??</p>
        </footer>
      </ContainerPrincipal>

    );
  }
}


