import * as React from 'react';
import * as S from './App.styles';

import { Display } from '../components/Display';
import { PlayArea } from '../components/PlayArea';
import { StartButton } from '../components/StartButton';
import { createPlayArea, usePlayer, usePlayArea, useInterval, isColliding } from '../utils';
import { KEYS } from '../constants';

export const App: React.FC = () => {
  const [dropTime, setDroptime] = React.useState<null | number>(null);
  const [gameOver, setGameOver] = React.useState(true);
  const gameArea = React.useRef<HTMLDivElement>(null);

  const { player, playerRotate, updatePlayerPos, resetPlayer } = usePlayer();
  const { playArea, setPlayArea } = usePlayArea(player, resetPlayer);

  const movePlayer = (direction: number) => {
    if (isColliding(player, playArea, { x: direction, y: 0 })) return;

    updatePlayerPos({ x: direction, y: 0, collided: false });
  };

  const move = ({ keyCode, repeat }: { keyCode: number; repeat: boolean }): void => {
    if (gameOver) return;

    switch (keyCode) {
      case KEYS.LEFT_ARROW:
        movePlayer(-1);
        return;
      case KEYS.RIGHT_ARROW:
        console.log(player.pos.x);
        movePlayer(1);
        return;
      case KEYS.DOWN_ARROW:
        if (repeat) return;
        setDroptime(30);
        return;
      case KEYS.UP_ARROW:
        playerRotate(playArea);
        return;
    }
  };

  const keyUp = ({ keyCode }: { keyCode: number }): void => {
    if (keyCode === KEYS.DOWN_ARROW) {
      setDroptime(1000);
    }
  };

  const handleStartGame = (): void => {
    if (gameArea.current) gameArea.current.focus();
    setPlayArea(createPlayArea());
    setDroptime(1000);
    resetPlayer();
    setGameOver(false);
  };

  const drop = (): void => {
    if (!isColliding(player, playArea, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      // Check for Game Over Condition
      if (player.pos.y < 1) {
        console.log('GAME OVER MAAAN!');
        setGameOver(true);
        setDroptime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  useInterval(() => {
    drop();
  }, dropTime);

  return (
    <S.TetrisWrapperDiv role="button" tabIndex={0} onKeyDown={move} onKeyUp={keyUp} ref={gameArea}>
      <S.TetrisDiv>
        <div>
          {gameOver ? (
            <>
              <Display gameOver={gameOver} text="Game Over!" />
              <StartButton callback={handleStartGame} />
            </>
          ) : (
            <>
              <Display text={`Score: `} />
              <Display text={`Rows: `} />
              <Display text={`Level: `} />
            </>
          )}
        </div>
        <PlayArea playAreaGrid={playArea} />
      </S.TetrisDiv>
    </S.TetrisWrapperDiv>
  );
};
