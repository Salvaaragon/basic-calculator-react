// vendor
import { ReactElement } from 'react';

// styles
import { ButtonStyled } from './button.styled';

// types
type Props = {
  handleClick: Function;
  title: string;
  isClear?: boolean;
  isOperator?: boolean;
};

const Button = ({ handleClick, title, isClear, isOperator }: Props): ReactElement => {
  return (
    <ButtonStyled onClick={() => handleClick()} isClear={isClear} isOperator={isOperator}>
      {title}
    </ButtonStyled>
  );
};

Button.defaultProps = {
  isClear: false,
  isOperator: false,
};

export { Button };
