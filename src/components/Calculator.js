import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const result = Function(`return (${input})`)();
        console.log(result);
        setInput(result.toString());
      } catch (error) {
        setInput('Error');
      }
    }else if (value === '←') { 
      setInput((prevInput) => prevInput.slice(0, -1));
    }
    else if (value === 'C') {
      setInput('');
    } 
    else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className='grow '>
      <div className="calculator">
      <div className="display">
        <input type="text" value={input}/>
      </div>
      <div className="buttons">
      <button className="animated" onClick={() => handleButtonClick('C')}>AC</button>
      <button onClick={() => handleButtonClick('←')}>←</button>
      <button className="cos" onClick={() => handleButtonClick('Math.cos(')}><span>cos</span></button>
        <button className="sin" onClick={() => handleButtonClick('Math.sin(')}><span>sin</span></button>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button className="tan" onClick={() => handleButtonClick('Math.tan(')}><span>tan</span></button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('*')}>x</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('%')}>%</button>
        <button onClick={() => handleButtonClick('(')}>(</button>
        <button onClick={() => handleButtonClick(')')}>)</button>
        <button className="animated" onClick={() => handleButtonClick('=')}>=</button>
      </div>
    </div>
    </div>
  );
}

export default Calculator;
