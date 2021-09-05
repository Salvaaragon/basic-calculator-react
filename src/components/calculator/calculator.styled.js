// vendor
import styled from 'styled-components';

export const CalculatorStyled = styled.div`
  background-color: #0000ff2e;
  border: solid 2px #0000f7;
  width: 50%;

  @media screen and (max-width: 1200px) {
    width: 75%;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
CalculatorStyled.displayName = 'CalculatorStyled';

export const Grid = styled.div`
  display: grid;
  grid-column: ${(props) => props.column};
  grid-row: ${(props) => props.row};
  margin: ${(props) => !props.nomargin && '20px'};

  @media screen and (max-width: 500px) {
    margin: ${(props) => !props.nomargin && '10px'};
  }
`;
Grid.displayName = 'Grid';
