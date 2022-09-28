import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import Clear from './components/Clear';
import {useState} from 'react'
import { evaluate } from 'mathjs'

function App() {
  //hook to control screen value
  const [input, setInput] = useState('')

  //this function concatenates the input with the value of the buttons pressed
  const addInput = (value) => {
    setInput(input + value)
  }

  //this clear the screen setting the state into a void string
  const clear = () => {
    setInput('')
  }

  const calculate = () => {
    //validation (void string are false). Prevents undefined if user clicks '=' and then a number.
    //evalute return a result from a string
    if (input) {
      setInput(evaluate(input))
    } else {
      alert('Por favor ingrese valores para realizar los calculos')
    }
  }

  // Button component are return and the function that concatenes string are passed as a prop
  // '=' component calls the calculate function, that uses math random library
  // Clear component invokes the function that set to a void string the input
  return (
    <div className="App">
      <div className='calculatorContainer'>
        <Input input={input}></Input>
        <div className="line">
          <Button clickHandler={addInput}>2</Button>
          <Button clickHandler={addInput}>3</Button>
          <Button clickHandler={addInput}>1</Button>
          <Button clickHandler={addInput}>+</Button>
        </div>
        <div className="line">
          <Button clickHandler={addInput}>4</Button>
          <Button clickHandler={addInput}>5</Button>
          <Button clickHandler={addInput}>6</Button>
          <Button clickHandler={addInput}>-</Button>
        </div>
        <div className="line">
          <Button clickHandler={addInput}>7</Button>
          <Button clickHandler={addInput}>8</Button>
          <Button clickHandler={addInput}>9</Button>
          <Button clickHandler={addInput}>*</Button>
        </div>
        <div className="line">
          <Button clickHandler={calculate}>=</Button>
          <Button clickHandler={addInput}>0</Button>
          <Button clickHandler={addInput}>.</Button>
          <Button clickHandler={addInput}>/</Button>
        </div>
        <div className="line">
          <Clear clickHandler={clear}></Clear>
        </div>
      </div>
    </div>
  );
}

export default App;
