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

  guardaValorMin = (event) => {
    this.setState({
      inputValorMin: event.target.value
    })
  }

  guardaValorMax = (event) => {
    this.setState({
      inputValorMax: event.target.value
    })
  }

    render() {
      return (
        <ContainerFiltro>
            <h2> Filtros </h2>
              <label>Valor mínimo:</label>
                <input 
                  value={this.props.inputValorMin}
                  onChange={this.guardaValorMin}
                  type="number"></input>
              <label>Valor máximo:</label>
                <input 
                  value={this.props.inputValorMax}
                  onChange={this.guardaValorMax}
                  type="number"></input>
              <label>Buscar por nome:</label>
                <input></input>
        </ContainerFiltro>
      );
    }
  }