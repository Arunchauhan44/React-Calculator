
import { useState } from 'react';
import styles from  './App.module.css';
import Display from './components/Display';
import Buttons from './components/Buttons';

function App() {
  const [Calval, setCalVal] = useState("");

  const onButtonclick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(Calval);
      setCalVal(result);
    } else {
      const newDisplayValue = Calval + buttonText;
      setCalVal(newDisplayValue);
    }
  };

 

  return (
    <>
      <div className={styles.Main}>
        <Display Dispalyvalue ={Calval}/>
        <Buttons onButtonclick = {onButtonclick} /> 
      </div>
    </>
  )
}

export default App;
