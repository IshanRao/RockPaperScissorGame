import { useState } from 'react';
import './App.css';

function App() {
  const [score, setScore] = useState({user: 0, computer: 0});
  const [choice, setChoice] = useState({userChoice: '', computerChoice: ''});
  const [winner, setWinner] = useState('');

  const gameWeaponChoices = ['Rock','Paper','Scissors'];

  // To generate a random number within a range use this formula 
  // Math.floor(Math.random() * (max - min + 1)) + min;
  const generateComputerChoice = () => Math.floor(Math.random()*gameWeaponChoices.length);

  const onUserChoiceSelection = (event) => {

    const computerChoice = gameWeaponChoices[generateComputerChoice()];
    const userChoice = gameWeaponChoices[Number(event.target.value)];``
    setChoice({
      userChoice: userChoice,
      computerChoice: computerChoice
    })

    if(userChoice === computerChoice){
      setWinner(`It's a Tie!`);
      return;
    }

    const winingChoice = getWinner(userChoice,computerChoice);
    if(winingChoice === userChoice){
      setWinner('You Win!');
      setScore({
        ...score,
        user: score.user + 1
      })
    } 
    else{
      setWinner('Computer Wins!');
      setScore({
        ...score,
        computer: score.computer + 1
      })
    }

  }

  const getWinner = (choice1, choice2) => {
    // Decide winner when choices are different
    if([gameWeaponChoices[0],gameWeaponChoices[1]].includes(choice1) && [gameWeaponChoices[0],gameWeaponChoices[1]].includes(choice2)) return gameWeaponChoices[1];
    if([gameWeaponChoices[1],gameWeaponChoices[2]].includes(choice1) && [gameWeaponChoices[1],gameWeaponChoices[2]].includes(choice2)) return gameWeaponChoices[2];
    if([gameWeaponChoices[0],gameWeaponChoices[2]].includes(choice1) && [gameWeaponChoices[0],gameWeaponChoices[2]].includes(choice2)) return gameWeaponChoices[0];
  }

  const resetGame = () => {
    setScore({
      user: 0,
      computer: 0
    });
    setChoice({
      userChoice: '',
      computerChoice: ''
    });
    setWinner('');
  }


  return (
    <>
      <h1 class="text-3xl font-bold underline">Rock Paper Scissor</h1>
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
        {gameWeaponChoices.map((weapon, index) => <button value={index} onClick={onUserChoiceSelection}>{weapon}</button>)}
      </div>
      {choice.userChoice && (
        <>
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
          <p>{winner}</p>
        </>
      )}
      
      <button onClick={resetGame}>RESET</button>
    </>
  )
}

export default App
