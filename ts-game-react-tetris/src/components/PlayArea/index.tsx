import React from 'react';

import { Cell } from '../Cell';
import { TETROMINOS } from '../../constants';

import * as S from './PlayArea.styles';

export type StageCell = [keyof typeof TETROMINOS, string];
export type Stage = StageCell[][];

interface PlayAreaProps {
  stage: Stage;
}

export const PlayArea: React.FC<PlayAreaProps> = ({ stage }) => {
  return (
    <S.PlayAreaDiv>
      {stage.map((row) => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
    </S.PlayAreaDiv>
  );
};
