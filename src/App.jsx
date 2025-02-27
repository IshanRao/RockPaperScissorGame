import { useState } from 'react';
import './App.css';

function App() {
  const [score, setScore] = useState({user: 0, computer: 0});


  return (
    <>
      <h1>Rock Paper Scissor</h1>
      <h2>Score</h2>
      <table>
        <tr>
          <td>You</td>
          <td>Computer</td>
        </tr>
        <tr>
          <td>{score.user}</td>
          <td>{score.computer}</td>
        </tr>
      </table>
      <h2>Choose your weapon</h2>
      <div className="button-group">
        <button onClick={() => {}}>Rock</button>
        <button onClick={() => {}}>Paper</button>
        <button onClick={() => {}}>Scissors</button>
      </div>
      <table>
        <tr>
          <td>You chose:</td>
          <td>Computer chose:</td>
        </tr>
        <tr>
          <td>{score.user}</td>
          <td>{score.computer}</td>
        </tr>
      </table>
      <p>{'YOU WIN'}</p>
      <button onClick={() => {}}>RESET</button>
    </>
  )
}

export default App
