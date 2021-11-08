import * as React from 'react';

import logo from '../../assets/logo.svg';
import styles from './Header.module.css';

export const Header: React.FC = ({ children }) => (
  <header className={styles.appheader}>
    <img src={logo} className={styles.applogo} alt="logo" />
    {children}
  </header>
);
