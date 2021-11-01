import logo from './logo.svg';
import Input from "./Components/Input"
import Display from "./Components/Display"
import React, {useState} from "react"

function App() {

  const [colorz, setColor] = useState([])

  const addColor = (newC) => {
    setColor([...colorz, newC])
  }

  return (
    <div className="App">
      <header className="App-header">
        <Input newColor={addColor}></Input>
        <br></br>
        <Display userInput={colorz}></Display>
      </header>
    </div>
  );
}

export default App;
