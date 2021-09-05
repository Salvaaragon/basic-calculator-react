// vendor
import { ReactElement } from 'react';

// styles
import { DataDisplayerStyled } from './dataDisplayer.styled.js';

// types
type Props = {
  data: string;
};

const DataDisplayer = ({ data }: Props): ReactElement => {
  return <DataDisplayerStyled>{data}</DataDisplayerStyled>;
};

export { DataDisplayer };
