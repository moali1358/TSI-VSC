import React, { useState, useEffect } from 'react';
import ResultsComponent from './component/ResultsComponent';
import './App.css';

function App() {

  const [tableColor, Table] = useState('');
  const handleButtonClick = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    Table(randomColor);
  };

  return (<>
    <h1>
      Alis React App
    </h1>
    <button onClick={handleButtonClick}>Change Table Color</button>
    <ResultsComponent tableColor={tableColor} />
  </>)
}


export default App;
