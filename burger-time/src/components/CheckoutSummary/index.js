import React from 'react';

import Burger from '../Burger';
import Button from '../Button';
import styles from './CheckoutSummary.module.css';

const CheckoutSummary = ({ ingredients, checkoutCancelled, checkoutContinued }) => (
  <div className={styles.CheckoutSummary}>
    <h1>We hope it tastes great!</h1>
    <div style={{ width: '100%', margin: 'auto' }}>
      <Burger ingredients={ingredients} />
    </div>
    <Button
      btnType="Danger"
      clicked={checkoutCancelled}
    >
      CANCEL
    </Button>
    <Button
      btnType="Success"
      clicked={checkoutContinued}
    >
      CONTINUE
    </Button>
  </div>
);

export default CheckoutSummary;
