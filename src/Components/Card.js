import React from 'react';
import styled from 'styled-components';

const ContainerCard = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
text-align: center;
border: 10px solid transparent;
&:hover{
  cursor: pointer;
  box-shadow: 1px 1px 5px 2px black;
}
`
const CardPhoto = styled.img`
width: 100%;
align-items: center;
border-radius: 5px;
`
const CardText = styled.p`
padding: 0 10px;
font-size: 20px;

`
const CardButton = styled.button`
padding: 5px;
width: 100%;
background-color: fff;
border-radius: 5px;
color: #5d1917;
font-size: 17px;
font-weight: bold;
border: 1px solid black;
&:hover{
  background: darkblue;
  color: #fff;
  cursor: pointer;
}
`
export default class Card extends React.Component {


    render() {
      return (
        <ContainerCard>
            <CardPhoto src={this.props.imagem} />
            <CardText>{this.props.nomeCard}</CardText>
            <CardText>Valor: R${this.props.valor}</CardText>
            <CardButton> 
            <button value={this.props.value} onClick={this.props.addViagem}> Adicionar ao carrinho </button>
          </CardButton>
        </ContainerCard>
      );
    }
  }