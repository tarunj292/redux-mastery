import styles from "./App.module.css"
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer"
import { useState } from "react";

const App = () => {

  let [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === 'C') {
      setCalVal("");
    } else if (buttonText === '=') {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  }

  return (
    <div className={styles.calculator}>
      <Display disVal={calVal}></Display>
      <ButtonContainer onButtonClick={onButtonClick} />
    </div>
  )
}

export default App;