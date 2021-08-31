import styled from 'styled-components';
import { PLAY_AREA_WIDTH, PLAY_AREA_HEIGHT } from '../../constants';

export const PlayAreaDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(${PLAY_AREA_WIDTH}, 30px);
  grid-template-rows: repeat(${PLAY_AREA_HEIGHT}, 30px);
  grid-gap: 1px;
  border: 1px solid #777;
  background: #222;
`;
