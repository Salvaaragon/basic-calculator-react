// vendor
import { ReactElement } from 'react';

// components
import { Button } from '../button/button';
import { DataDisplayer } from '../dataDisplayer/dataDisplayer';
// hooks
import { useCalculator } from '../../hooks/useCalculator';
// styles
import { CalculatorStyled, Grid } from './calculator.styled';

const Calculator = (): ReactElement => {
  const {
    defineFirstOperand,
    defineSecondOperand,
    defineOperator,
    calculate,
    result,
    operandA,
    operandB,
    operator,
    clearCalculator,
  } = useCalculator();

  const defineOperand = (operand: string) => {
    if (!operator) defineFirstOperand(operand);
    else defineSecondOperand(operand);
  };

  const getDisplayedInfo = (): string => {
    if (result) return result;
    if (!operandA) return '0000';
    return `${operandA ?? '00000'}${operator ?? ''}${operandB ?? ''}`;
  };

  return (
    <CalculatorStyled>
      <DataDisplayer data={getDisplayedInfo()} />
      <Grid nomargin>
        <Grid row="1" column="1">
          <Button title="7" handleClick={() => defineOperand('7')} />
        </Grid>
        <Grid row="1" column="2">
          <Button title="8" handleClick={() => defineOperand('8')} />
        </Grid>
        <Grid row="1" column="3">
          <Button title="9" handleClick={() => defineOperand('9')} />
        </Grid>
        <Grid row="2" column="1">
          <Button title="4" handleClick={() => defineOperand('4')} />
        </Grid>
        <Grid row="2" column="2">
          <Button title="5" handleClick={() => defineOperand('5')} />
        </Grid>
        <Grid row="2" column="3">
          <Button title="6" handleClick={() => defineOperand('6')} />
        </Grid>
        <Grid row="3" column="1">
          <Button title="1" handleClick={() => defineOperand('1')} />
        </Grid>
        <Grid row="3" column="2">
          <Button title="2" handleClick={() => defineOperand('2')} />
        </Grid>
        <Grid row="3" column="3">
          <Button title="3" handleClick={() => defineOperand('3')} />
        </Grid>
        <Grid row="4" column="1">
          <Button title="." handleClick={() => defineOperand('.')} />
        </Grid>
        <Grid row="4" column="2">
          <Button title="0" handleClick={() => defineOperand('0')} />
        </Grid>
        <Grid row="4" column="3">
          <Button title="=" handleClick={() => calculate()} />
        </Grid>
        <Grid row="1" column="4/6">
          <Button title="c" handleClick={() => clearCalculator()} isClear />
        </Grid>
        <Grid row="2" column="4">
          <Button title="/" handleClick={() => defineOperator('/')} isOperator />
        </Grid>
        <Grid row="3" column="4">
          <Button title="*" handleClick={() => defineOperator('*')} isOperator />
        </Grid>
        <Grid row="4" column="4">
          <Button title="-" handleClick={() => defineOperator('-')} isOperator />
        </Grid>
        <Grid row="2/5" column="5">
          <Button title="+" handleClick={() => defineOperator('+')} isOperator />
        </Grid>
      </Grid>
    </CalculatorStyled>
  );
};

export default Calculator;
