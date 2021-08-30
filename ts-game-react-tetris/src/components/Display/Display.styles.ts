import styled from 'styled-components';

interface DisplayProps {
  gameOver: boolean;
}

export const DisplayDiv = styled.div<DisplayProps>`
  box-sizing: border-box;
  display: flex;
  align-items: space-between;
  margin: 0 0 20px 0;
  padding: 20px;
  border: 2px solid #777;
  min-height: 20px;
  width: 120px;
  border-radius: 10px;
  color: ${(props) => (props.gameOver ? 'red' : '#999')};
  background: #000;
  font-size: 0.8rem;
`;
