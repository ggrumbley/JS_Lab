import React from 'react';

import styles from './NavigationBar.module.css';
import NavItem from './NavItem';

const NavigationBar = () => (
  <ul className={styles.NavigationBar}>
    <NavItem link="/" exact>
      Burger Builder
    </NavItem>
    <NavItem link="/orders">
      Orders
    </NavItem>
  </ul>
);

export default NavigationBar;
