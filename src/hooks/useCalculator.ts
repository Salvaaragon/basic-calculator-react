// vendor
import { useState } from 'react';

// constants
const SUM = '+';
const SUBSTRACT = '-';
const MULTIPLY = '*';
const DIVIDE = '/';

// types
type Operator = typeof SUM | typeof SUBSTRACT | typeof MULTIPLY | typeof DIVIDE;

const useCalculator = () => {
  const [operandA, setOperandA] = useState<string>('');
  const [operandB, setOperandB] = useState<string>('');
  const [operator, setOperator] = useState<Operator>();
  const [result, setResult] = useState<string>();

  const defineFirstOperand = (operand: string): void => {
    setResult('');
    setOperandA((prev) => prev + operand);
  };
  const defineSecondOperand = (operand: string): void => setOperandB((prev) => prev + operand);
  const defineOperator = (op: Operator): void => setOperator(op);
  const clearOperation = () => {
    setOperandA('');
    setOperandB('');
    setOperator(undefined);
  };
  const clearCalculator = () => {
    clearOperation();
    setResult('');
  };

  const calculate = (): void => {
    if (operandA && operandB && operator) {
      switch (operator) {
        case SUM:
          setResult((Number(operandA) + Number(operandB)).toString());
          break;
        case SUBSTRACT:
          setResult((Number(operandA) - Number(operandB)).toString());
          break;
        case MULTIPLY:
          setResult((Number(operandA) * Number(operandB)).toString());
          break;
        case DIVIDE:
          setResult((Number(operandA) / Number(operandB)).toString());
          break;
        default:
          setResult('');
      }
      clearOperation();
    }
  };

  return {
    clearCalculator,
    defineFirstOperand,
    defineSecondOperand,
    defineOperator,
    calculate,
    operandA,
    operandB,
    operator,
    result,
  };
};

export { useCalculator };
