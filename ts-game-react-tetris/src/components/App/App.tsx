import * as React from 'react';
import * as S from './App.styled';

export const App: React.FC = () => (
  <S.TetrisWrapperDiv role="button" tabIndex={0}>
    <S.TetrisDiv>Start here!</S.TetrisDiv>
  </S.TetrisWrapperDiv>
);
