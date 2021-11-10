import React from "react";
import styled from "styled-components";

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


export default class Filtro extends React.Component {


    render() {
      return (
        <ContainerFiltro>
            <h2> Filtros </h2>
            <label>Valor mínimo:</label>
            <input></input>
            <label>Valor máximo:</label>
            <input></input>
            <label>Buscar por nome:</label>
            <input></input>
        </ContainerFiltro>
      );
    }
  }