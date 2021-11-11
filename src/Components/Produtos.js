import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import lua from '../img/lua.jpeg';
import europa from '../img/europa.jpeg';
import marte from '../img/marte.jpeg';
import plutao from '../img/plutao.jpg';
import titan from '../img/titan.jpeg';
import venus from '../img/venus.jpeg';

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
    state = {
        viagens: [{
            imagem: lua,
            nomeCard: "Lua",
            valor: 300000
        },{
            imagem: europa,
            nomeCard: "Europa",
            valor: 300000
        },{
            imagem: plutao,
            nomeCard: "Plutão",
            valor: 300000
        },{
            imagem: marte,
            nomeCard: "Marte",
            valor: 300000
        },{
            imagem: titan,
            nomeCard: "Titan",
            valor: 300000
        },{
            imagem: venus,
            nomeCard: "Venus",
            valor: 300000
        }],
    }

    render() {
        const listaDeViagens = this.state.viagens.map((viagem) => {
            return (
                < Card
                    imagem = {viagem.imagem}
                    nomeCard = {viagem.nomeCard}
                    valor = {viagem.valor}
                />
            )
        })

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
                    {listaDeViagens}                 
                </ContainerProdutos>
            </div>
        );
    }
}