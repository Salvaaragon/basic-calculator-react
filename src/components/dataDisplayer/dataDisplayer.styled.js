// vendor
import styled from 'styled-components';

export const DataDisplayerStyled = styled.div`
  background-color: #d3cce1ab;
  border: solid 2px #0000f7;
  border-radius: 4px;
  color: #0000f7;
  cursor: default;
  display: flex;
  font-family: 'Digital Dream';
  font-size: 40px;
  justify-content: flex-end;
  margin: 20px 20px 0;
  overflow: hidden;
  padding: 10px;

  @media screen and (max-width: 500px) {
    margin: 10px 10px 0;
  }
`;
DataDisplayerStyled.displayName = 'DataDisplayerStyled';
