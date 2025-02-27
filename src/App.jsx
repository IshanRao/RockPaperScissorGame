import { useState } from 'react';
import './App.css';

function App() {
  const [score, setScore] = useState({user: 0, computer: 0});
  const [choice, setChoice] = useState({userChoice: '', computerChoice: ''});

  const gameWeaponChoices = ['Rock','Paper','Scissors'];

  // To generate a random number within a range use this formula 
  // Math.floor(Math.random() * (max - min + 1)) + min;
  const generateComputerChoice = () => Math.floor(Math.random()*3);

  const onUserChoiceSelection = (event) => {
    const computerChoice = gameWeaponChoices[generateComputerChoice()];
    const userChoice = gameWeaponChoices[Number(event.target.value)];

    setChoice({
      userChoice: userChoice,
      computerChoice: computerChoice
    })
  }


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
        <button value="0" onClick={onUserChoiceSelection}>{gameWeaponChoices[0]}</button>
        <button value="1" onClick={onUserChoiceSelection}>{gameWeaponChoices[1]}</button>
        <button value="2" onClick={onUserChoiceSelection}>{gameWeaponChoices[2]}</button>
      </div>
      <table>
        <tr>
          <td>You chose:</td>
          <td>Computer chose:</td>
        </tr>
        <tr>
          <td>{choice.userChoice}</td>
          <td>{choice.computerChoice}</td>
        </tr>
      </table>
      <p>{'YOU WIN'}</p>
      <button onClick={() => {}}>RESET</button>
    </>
  )
}

export default App
