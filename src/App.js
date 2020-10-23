import React, { useState } from 'react';

import { Cell } from './Cell';

const appConteinerStyles = {
  width: 500,
  height: 500,
  backgroundColor: '#bbb',
  display: 'grid',
  gridTemplateColumns: 'auto auto auto',
  gridTemplateRows: 'auto auto auto',
  rowGap: '6px',
  columnGap: '6px',
};

// prettier-ignore
const winningConditions = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], //Horizontal
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
  [0, 4, 8], [2, 4, 6],  // Diagonal
]

function App() {
  const [cells, setCells] = useState(Array(9).fill(undefined));
  const currentShape = cells.filter(Boolean).length % 2 === 0 ? 'x' : 'o';

  const winningCondition = winningConditions.find(winCond => {
    const line = winCond.map(cellIndex => cells[cellIndex]);

    return line[0] && line.every(cellValue => cellValue === line[0]);
  });

  const tie = cells.filter(Boolean).length === 9;

  const winningShape = winningCondition ? cells[winningCondition[0]] : undefined;

  const winner = winningShape ? winningShape:tie?'tie': undefined

  const onToggle = index => {
    setCells(oldCells => oldCells.map((c, i) => (i === index ? currentShape : c)));
  };

  if (winner) {
    return <h1>{winner} won!</h1>
  }

  return (
    <div style={appConteinerStyles}>
      {cells.map((cell, i) => (
        <Cell key={i} value={cell} index={i} onToggle={onToggle} />
      ))}
    </div>
  );
}

export default App;
