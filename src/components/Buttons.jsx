import React from 'react';
import styles from './Buttons.module.css';

function Buttons({onButtonclick}) {
    const Buttons = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '9', '0', '.', '='];
  return (
    <div>
          {Buttons.map((items) => <button onClick={ () =>  onButtonclick (items) }   key={items} className = {styles.button} >{items}</button> )}
          
          
          </div>
  )
}

export default Buttons;
