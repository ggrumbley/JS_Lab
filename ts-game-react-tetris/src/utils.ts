import * as React from 'react';

import { PLAY_AREA_WIDTH, PLAY_AREA_HEIGHT, TETROMINOS, CLEAR, MERGED } from './constants';
import { Player, PlayAreaCell, PlayAreaGrid } from './types';

export const createPlayArea = () =>
  Array.from(Array(PLAY_AREA_HEIGHT), () => Array(PLAY_AREA_WIDTH).fill([0, CLEAR]));

export const randomTetromino = () => {
  const tetrominos = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'] as (keyof typeof TETROMINOS)[];
  const randTetromino = tetrominos[Math.floor(Math.random() * tetrominos.length)];

  return TETROMINOS[randTetromino];
};

export const isColliding = (
  player: Player,
  playArea: PlayAreaGrid,
  { x: moveX, y: moveY }: { x: number; y: number },
) => {
  for (let y = 0; y < player.tetromino.length; y++) {
    for (let x = 0; x < player.tetromino[y].length; x++)
      if (typeof player.tetromino[y][x] === 'string') {
        if (
          !playArea[y + player.pos.y + moveY] ||
          !playArea[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          playArea[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== CLEAR
        ) {
          return true;
        }
      }
  }

  return false;
};

// Custom React Hooks

export const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = React.useRef<null | (() => void)>(null);

  // Remember the latest callback.
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  React.useEffect(() => {
    const tick = (): void => {
      if (savedCallback.current) savedCallback.current();
    };

    if (delay !== null) {
      const id = setInterval(tick, delay);

      return () => {
        clearInterval(id);
      };
    }
  }, [delay]);
};

export const usePlayer = () => {
  const [player, setPlayer] = React.useState<Player>({} as Player);

  const updatePlayerPos = ({
    x,
    y,
    collided,
  }: {
    x: number;
    y: number;
    collided: boolean;
  }): void => {
    setPlayer((prev) => ({
      ...prev,
      pos: {
        x: (prev.pos.x += x),
        y: (prev.pos.y += y),
      },
      collided,
    }));
  };

  const resetPlayer = React.useCallback(
    (): void =>
      setPlayer({
        pos: {
          x: PLAY_AREA_WIDTH / 2 - 2,
          y: 0,
        },
        tetromino: randomTetromino().shape as (keyof typeof TETROMINOS)[][],
        collided: false,
      }),
    [],
  );

  return { player, updatePlayerPos, resetPlayer };
};

export const usePlayArea = (player: Player, resetPlayer: () => void) => {
  const [playArea, setPlayArea] = React.useState(createPlayArea());
  const [rowsCleared, setRowsCleared] = React.useState(0);

  React.useEffect(() => {
    if (!player.pos) return;

    setRowsCleared(0);

    const sweepRows = (newPlayArea: PlayAreaGrid): PlayAreaGrid =>
      newPlayArea.reduce((acc, row) => {
        if (row.findIndex((cell) => cell[0] === 0) === -1) {
          setRowsCleared((prev) => prev + 1);

          acc.unshift(new Array(newPlayArea[0].length).fill([0, CLEAR]) as PlayAreaCell[]);
        }
        acc.push(row);
        return acc;
      }, [] as PlayAreaGrid);

    const updatePlayArea = (prevPlayArea: PlayAreaGrid): PlayAreaGrid => {
      const newPlayArea = prevPlayArea.map(
        (row) => row.map((cell) => (cell[1] === CLEAR ? [0, CLEAR] : cell)) as PlayAreaCell[],
      );

      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newPlayArea[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? MERGED : CLEAR}`,
            ];
          }
        });
      });

      if (player.collided) {
        resetPlayer();
        return sweepRows(newPlayArea);
      }

      return newPlayArea;
    };

    setPlayArea((prev) => updatePlayArea(prev));
  }, [player.collided, player.pos, player.tetromino, player.pos?.x, player.pos?.y, resetPlayer]);

  return { playArea, setPlayArea, rowsCleared };
};
