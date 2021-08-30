import * as React from 'react';

import { STAGE_WIDTH, STAGE_HEIGHT, TETROMINOS } from './constants';

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () => Array(STAGE_WIDTH).fill([0, 'clear']));

export const randomTetromino = () => {
  const tetrominos = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'] as (keyof typeof TETROMINOS)[];
  const randTetromino = tetrominos[Math.floor(Math.random() * tetrominos.length)];

  return TETROMINOS[randTetromino];
};

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
