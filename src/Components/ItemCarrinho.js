import React from "react";
import styled from "styled-components";


const CarrinhoItem = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`


export default class ItemCarrinho extends React.Component {
    
    render() {
        return (
            <CarrinhoItem>
                <p>{this.props.quantidadeCarrinho}</p>
                <p>{this.props.viagemNome}</p>
                <button onClick={this.props.excluiViagem}> Remover </button>
            </CarrinhoItem>
        );
    }
}

