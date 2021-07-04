import React from 'react';
import './App.css';
import episodes from './episodes.json'

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;

console.log(`Imported ${episodes.length} episode(s)`);
console.log(`First episode's name is ${episodes[0].name}`);
