import React from 'react';
import styled from 'styled-components';
import Card from './Card';

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

export default class Produtos extends React.Component {
    render() {
        return (
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
                    <Card
                        imagem={'https://picsum.photos/200/200'}
                        nomeCard={'Produto1'}
                        valor={3000}
                    />
                    <Card
                        imagem={'https://picsum.photos/200/200'}
                        nomeCard={'Produto2'}
                        valor={4000}
                    />
                    <Card
                        imagem={'https://picsum.photos/200/200'}
                        nomeCard={'Produto3'}
                        valor={5000}
                    />
                    <Card
                        imagem={'https://picsum.photos/200/200'}
                        nomeCard={'Produto4'}
                        valor={6000}
                    />
                    <Card
                        imagem={'https://picsum.photos/200/200'}
                        nomeCard={'Produto5'}
                        valor={7000}
                    />
                </ContainerProdutos>
            </div>
        );
    }
}