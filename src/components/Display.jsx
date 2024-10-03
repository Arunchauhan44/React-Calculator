import React from 'react';
import styles from './Display.module.css';

function Display({Dispalyvalue}) {
  return (
      <div>
          <input type="text" className={styles.Display} value={Dispalyvalue} readOnly />
        </div>
    
  )
}

export default Display;
