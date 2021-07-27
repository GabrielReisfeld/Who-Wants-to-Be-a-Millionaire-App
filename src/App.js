import { useState, useEffect, useMemo } from "react";
import "./App.css";
import logo from './media/logo.png';
import Quiz from "./components/Quiz";
import Timer from "./components/Timer";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "What year was McDonald's founded?",
      answers: [
        {
          text: "1950",
          correct: false,
        },
        {
          text: "1955",
          correct: true,
        },
        {
          text: "1960",
          correct: false,
        },
        {
          text: "1965",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website 'Facebook' launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who invented the printing press?",
      answers: [
        {
          text: "Benjamin Franklin",
          correct: false,
        },
        {
          text: "Nikola Tesla",
          correct: false,
        },
        {
          text: "George Washington",
          correct: false,
        },
        {
          text: "Johannes Gutenberg",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "What is the largest organ of the human body?",
      answers: [
        {
          text: "Heart",
          correct: false,
        },
        {
          text: "Skin",
          correct: true,
        },
        {
          text: "Liver",
          correct: false,
        },
        {
          text: "Intestine",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "What is the name of the Jewish New Year?",
      answers: [
        {
          text: "Elul",
          correct: false,
        },
        {
          text: "Succoss",
          correct: false,
        },
        {
          text: "Pesaj",
          correct: false,
        },
        {
          text: "Rosh Hashanah",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question: "How many colors are in a rainbow?",
      answers: [
        {
          text: "7",
          correct: true,
        },
        {
          text: "8",
          correct: false,
        },
        {
          text: "9",
          correct: false,
        },
        {
          text: "10",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Which of these colors is NOT featured in the Google logo?",
      answers: [
        {
          text: "Yellow",
          correct: false,
        },
        {
          text: "Blue",
          correct: false,
        },
        {
          text: "Orange",
          correct: true,
        },
        {
          text: "Red",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "What is the French word for 'hat'?",
      answers: [
        {
          text: "Chapeu",
          correct: true,
        },
        {
          text: "Bonnet",
          correct: false,
        },
        {
          text: "Sombrero",
          correct: false,
        },
        {
          text: "Casque",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Who is depicted on the US hundred dollar bill?",
      answers: [
        {
          text: "Benjamin Franklin",
          correct: true,
        },
        {
          text: "George Washington",
          correct: false,
        },
        {
          text: "Abraham Lincoln",
          correct: false,
        },
        {
          text: "Thomas Jefferson",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Who invented the lightbulb?",
      answers: [
        {
          text: "Thomas Edison",
          correct: true,
        },
        {
          text: "George Washington",
          correct: false,
        },
        {
          text: "Nikola Tesla",
          correct: false,
        },
        {
          text: "Benjamin Franklin",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "In which continent is Belarus located?",
      answers: [
        {
          text: "Asia",
          correct: false,
        },
        {
          text: "Africa",
          correct: false,
        },
        {
          text: "Europe",
          correct: true,
        },
        {
          text: "America",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Which planet is the closest to the sun?",
      answers: [
        {
          text: "Jupiter",
          correct: false,
        },
        {
          text: "Mars",
          correct: false,
        },
        {
          text: "Earth",
          correct: false,
        },
        {
          text: "Mercury",
          correct: true,
        },
      ],
    },
    {
      id: 13,
      question: "How tall is the Burj Khalifa?",
      answers: [
        {
          text: "628m",
          correct: false,
        },
        {
          text: "728m",
          correct: false,
        },
        {
          text: "828m",
          correct: true,
        },
        {
          text: "928m",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Which song doesn´t belong to 'The Beatles'?",
      answers: [
        {
          text: "Come Together",
          correct: false,
        },
        {
          text: "Here Comes the Sun",
          correct: false,
        },
        {
          text: "Eleanor Rigby",
          correct: false,
        },
        {
          text: "Angie",
          correct: true,
        },
      ],
    },
    {
      id: 15,
      question: "What is 'Homer J. Simpson' middle name?",
      answers: [
        {
          text: "James",
          correct: false,
        },
        {
          text: "Jay",
          correct: true,
        },
        {
          text: "Joseph",
          correct: false,
        },
        {
          text: "Jacob",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);

  return (
    <div className="App">
      <div className="main">
        {stop ? (
          <div className="end">
            <h1 className="endText">You win: {earned}</h1>
            <button className="playAgain" onClick={() => window.location.reload()}>Play Again</button>
          </div>
        ) : (
          <>
            <div className="top">
              <div className="timer">
                <Timer setStop={setStop} questionNumber={questionNumber} />
              </div>
            </div>
            <div className="bottom">
              <Quiz
                data={data}
                setStop={setStop}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
              />
            </div>
          </>
        )}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          <img src={logo} className="logo" alt="logo" />
          {moneyPyramid.map((m) => (
            <li
              className={
                questionNumber === m.id
                  ? "moneyListItem active"
                  : "moneyListItem"
              }
            >
              <span className="moneyListItemNumber">{m.id}</span>
              <span className="moneyListItemAmount">{m.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
