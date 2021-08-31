import React from 'react';

import { PlayAreaGrid } from '../../types';
import { Cell } from '../Cell';
import * as S from './PlayArea.styles';

interface PlayAreaProps {
  playAreaGrid: PlayAreaGrid;
}

export const PlayArea: React.FC<PlayAreaProps> = ({ playAreaGrid }) => {
  return (
    <S.PlayAreaDiv>
      {playAreaGrid.map((row) => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
    </S.PlayAreaDiv>
  );
};
