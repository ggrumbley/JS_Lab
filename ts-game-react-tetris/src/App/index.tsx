import * as React from 'react';
import * as S from './App.styles';

import { Display } from '../components/Display';
import { PlayArea } from '../components/PlayArea';
import { StartButton } from '../components/StartButton';
import { createStage } from '../utils';

export const App: React.FC = () => {
  const [dropTime, setDroptime] = React.useState<null | number>(null);
  const [gameOver, setGameOver] = React.useState(true);

  return (
    <S.TetrisWrapperDiv role="button" tabIndex={0}>
      <S.TetrisDiv>
        <div>
          {gameOver ? (
            <>
              <Display gameOver={gameOver} text="Game Over!" />
              <StartButton callback={() => null} />
            </>
          ) : (
            <>
              <Display text={`Score: `} />
              <Display text={`Rows: `} />
              <Display text={`Level: `} />
            </>
          )}
        </div>
        <PlayArea stage={createStage()} />
      </S.TetrisDiv>
    </S.TetrisWrapperDiv>
  );
};
