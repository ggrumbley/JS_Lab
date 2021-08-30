import * as React from 'react';
import * as S from './Display.styles';

interface DisplayProps {
  gameOver?: boolean;
  text: string;
}

export const Display: React.FC<DisplayProps> = ({ gameOver = false, text }) => (
  <S.DisplayDiv gameOver={gameOver}>{text}</S.DisplayDiv>
);
