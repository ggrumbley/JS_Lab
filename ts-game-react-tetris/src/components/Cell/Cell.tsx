import * as React from 'react';

import { TETROMINOS } from '../../constants';
import * as S from './Cell.styles';

interface CellProps {
  type: keyof typeof TETROMINOS;
}

export const Cell: React.FC<CellProps> = React.memo(function Cell({ type }) {
  return (
    <S.CellDiv type={type} color={TETROMINOS[type].color}>
      Hello
    </S.CellDiv>
  );
});
