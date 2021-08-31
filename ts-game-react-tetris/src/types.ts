import { TETROMINOS } from './constants';

export type PlayAreaCell = [keyof typeof TETROMINOS, string];

export type PlayAreaGrid = PlayAreaCell[][];

export interface Player {
  pos: {
    x: number;
    y: number;
  };
  tetromino: (keyof typeof TETROMINOS)[][];
  collided: boolean;
}
