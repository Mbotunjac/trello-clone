import React from 'react';
import './App.css';

import DragNDrop from './components/DragNDrop';

const data = [
  {title: 'Backlog', items: ['1', '2', '3']},
  {title: 'In Progress', items: ['4', '5']},
  {title: 'Complete', items: ['6', '7']},
  {title: 'On Hold', items: []}
]


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <DragNDrop data = {data}/>
      </header>
    </div>
  );
}

export default App;
