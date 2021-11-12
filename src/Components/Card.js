import React from 'react';
import styled from 'styled-components';

const ContainerCard = styled.div`
border: 1px solid black;
width: 300px;
height: 45.35vh;
`
const CardPhoto = styled.img`
  width: 100%;
`
const CardText = styled.p`
padding: 0 10px;
`
const CardButton = styled.div`
display: flex;
justify-content: center;
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