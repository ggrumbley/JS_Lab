import React from 'react';
import styled from 'styled-components';

import Triangle from './Triangle';

const StyledLogo = styled.div`
  h1 {
    color: #c6cbf5;
    font-family: 'Orbitron', sans-serif;
    font-size: 120px;
    font-weight: 1000;
    line-height: 1.2;
    left: 50%;
    margin: 0;
    margin-left: -420px;
    position: absolute;
    text-align: center;
    text-transform: uppercase;
    top: 80px;
    width: 852px;
    z-index: 11;
    background: -webkit-linear-gradient(top, #151c60, #c6cbf5 40%, black 40%, #e1a0ce 65%, white);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: white;
  }

  h2 {
    color: #d100b1;
    display: block;
    font-family: 'Yellowtail', cursive;
    font-size: 150px;
    margin-right: -8em;
    position: absolute;
    text-shadow: 0 0 1px #d100b1, 0 -3px 3px rgba(255, 255, 255, 0.8), 0 3px 3px rgba(0, 0, 0, 0.5), 0 0 15px #d100b1,
      0 0 45px rgba(209, 0, 177, 0.8);
    text-align: center;
    text-decoration: underline;
    text-transform: none;
    -webkit-transform: skew(-10deg) rotate(-10deg);
    -ms-transform: skew(-10deg) rotate(-10deg);
    transform: skew(-10deg) rotate(-10deg);
    top: 20px;
    width: 100%;
    z-index: 11;
  }
`;

const Logo = () => (
  <StyledLogo>
    <h1>Gary</h1>
    <h2>Grumbley</h2>
    <Triangle />
  </StyledLogo>
);

export default Logo;