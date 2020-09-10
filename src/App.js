import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

function App() {
  const [inputString, setInputString] = useState('');
  const [outputString, setOutputString] = useState('');
  console.log(inputString);

  const engString = ` qwertyuiop[]asdfghjkl;'zxcvbnm,./QWERTYUIOP{}ASDFGHJKL:"ZXCVBNM<>?1234567890-=!@#$%^&*()_+\`~`;
  const ruString = ` йцукенгшщзхъфывапролджэячсмитьбю.ЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ,1234567890-=!"№;%:?*()_+ёЁ`;

  const engArray = engString.split('');
  const ruArray = ruString.split('');

  const translateInputString = useCallback(() => {
    const inputArray = inputString.split('');
    let output = '';
    inputArray.forEach((inputItem) => {
      engArray.forEach((engItem, engIndex) => {
        if (inputItem === engItem) {
          output += ruArray[engIndex];
        } 
      });
    });
    setOutputString(output);
  }, [engArray, inputString, ruArray]);

  useEffect(() => {
    translateInputString();
  }, [inputString, translateInputString]);

  return (
    <div className="app">
      <div className="content">
        <textarea 
        placeholder='Введите здесь белиберду, которую вы случайно набрали на английской раскладке :з'
          className="input" 
          autoFocus
          value={inputString}
          maxLength={5000}
          onChange={(e) => setInputString(e.target.value)}
        />
        <textarea 
          className="output" 
          readOnly 
          value={outputString}
        />
      </div>
    </div>
  );
}

export default App;
