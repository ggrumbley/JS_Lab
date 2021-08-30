import * as React from 'react';

import * as S from './StartButton.styles';

interface StartButtonProps {
  callback: () => void;
}

export const StartButton: React.FC<StartButtonProps> = ({ callback }) => (
  <S.StartButton onClick={callback}>Start Game</S.StartButton>
);
