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
    <div className="flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-100 p-4">
      <h1 className="text-5xl font-bold text-blue-600 mb-6">Rock Paper Scissor</h1>
      <div className="bg-white shadow-md rounded-lg w-full max-w-md p-4 mb-6">
        <h2 className="text-2xl font-semibold text-center text-white bg-blue-500 p-2 rounded-t-lg">Score</h2>
        <table className="w-full text-center border-collapse">
          <tbody>
            <tr className="bg-gray-200">
              <td className="p-2 border-b border-r">You</td>
              <td className="p-2 border-b">Computer</td>
            </tr>
            <tr>
              <td className="p-2 border-r">{score.user}</td>
              <td className="p-2">{score.computer}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2 className="text-2xl font-semibold mb-4">Choose your weapon</h2>
      <div className="flex space-x-4 mb-6">
        {gameWeaponChoices.map((weapon, index) => (
          <button
            key={index}
            value={index}
            onClick={onUserChoiceSelection}
          >
            {weapon}
          </button>
        ))}
      </div>
      {choice.userChoice && (
        <div className="bg-white shadow-md rounded-lg w-full max-w-md p-4 mb-6">
          <table className="w-full text-center border-collapse">
            <tbody>
              <tr className="bg-gray-200">
                <td className="p-2 border-b border-r">You chose:</td>
                <td className="p-2 border-b">Computer chose:</td>
              </tr>
              <tr>
                <td className="p-2 border-r">{choice.userChoice}</td>
                <td className="p-2">{choice.computerChoice}</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xl font-semibold text-center mt-4">{winner}</p>
        </div>
      )}
      <button
        onClick={resetGame}
      >
        RESET
      </button>
    </div>
  )
}

export default App
