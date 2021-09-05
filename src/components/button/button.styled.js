// vendor
import styled from 'styled-components';

export const ButtonStyled = styled.button`
  background-color: ${(props) => {
    if (props.isClear) return '#ea3838a8';
    if (props.isOperator) return '#7777d2';
    return '#0000f7';
  }};
  border-color: ${(props) => {
    if (props.isClear) return '#ea3838a8';
    if (props.isOperator) return '#7777d2';
    return '#0000f7';
  }};
  border-radius: 4px;
  box-shadow: 1px 2px 1px #000;
  color: #fff;
  cursor: pointer;
  font-family: 'Digital Dream';
  font-size: 20px;
  padding: 15px;

  &:hover {
    box-shadow: inset 0 0 10px #000;
  }
`;
ButtonStyled.displayName = 'ButtonStyled';
