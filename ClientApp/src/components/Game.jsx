import React, { useState } from "react";
import { Link } from "react-router-dom";

import Questions from "../sampleQuestions";
import Question from "./Question";

export function Game() {
  let [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);
  let [resetCurrentQuestionIndex, setResetCurrentQuestionIndex] = useState(11);
  let [resetCurrentQuestionNumber, setResetCurrentQuestionNumber] = useState(0);
  let [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);

  let [showRoundScore, setShowRoundScore] = useState(false);
  let [score, setScore] = useState(0);
  let [showingCorrectAnswer, setShowingCorrectAnswer] = useState(false);
  let [chosenAnswer, setChosenAnswer] = useState("");
  let [roundOne, setRoundOne] = useState(true);
  let [bonusQuestionButton, setBonusQuestion] = useState(false);
  let [totalScore, setTotalScore] = useState(0);
  let [showTotalScore, setShowTotalScore] = useState(false);

  let correctAnswer = Questions[currentQuestionIndex].correct;
  const incorrectAnswers = Questions[currentQuestionIndex].incorrect;
  const currentQuestion = Questions[currentQuestionIndex];

  function mixAnswers(correct, incorrect) {
    const mixedAnswers = [...incorrect, correct];
    for (var i = 3; i > 0; i--) {
      const rand = Math.floor(Math.random() * Math.floor(i));
      const hold = mixedAnswers[i];
      mixedAnswers[i] = mixedAnswers[rand];
      mixedAnswers[rand] = hold;
    }
    return mixedAnswers;
  }
  function addClassBasedOnChosenAnswer(answer) {
    if (
      showingCorrectAnswer &&
      chosenAnswer === correctAnswer &&
      chosenAnswer === answer
    ) {
      return "correct";
    } else if (
      showingCorrectAnswer &&
      chosenAnswer !== correctAnswer &&
      chosenAnswer === answer
    ) {
      return "incorrect";
    } else {
      return null;
    }
  }
  const x = <h1>regheroughe</h1>;
  return (
    <>
      {showRoundScore ? (
        <div className="gameContainer">
          <div className="showScoreContainer">
            <div className="question showScoreRound">
              <p>{score}/10 !</p>
              <button
                id="one"
                className="nextButton"
                onClick={() => {
                  setShowRoundScore(false);
                  setCurrentQuestionNumber(1);
                  if (currentQuestionIndex === 20) {
                    setBonusQuestion(true);
                    setCurrentQuestionIndex(resetCurrentQuestionNumber);
                  }
                }}
              >
                {bonusQuestionButton ? "Bonus Question" : "Round 2"}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="showScore">
          <div className="gameContainer">
            <div className="Game">
              <div className="question">
                <h1>{roundOne ? "Round One" : null}</h1>
                <h1>
                  {!roundOne && currentQuestionIndex > 0 ? "Round Two" : null}
                  {!roundOne && currentQuestionIndex === 0
                    ? "Bonus Question"
                    : null}
                </h1>
                {currentQuestionIndex > 0 ? (
                  <h2>Question {currentQuestionNumber} /10 </h2>
                ) : null}{" "}
                <h3>{currentQuestion.question}</h3>
              </div>

              <div className="answerContainer">
                {mixAnswers(correctAnswer, incorrectAnswers).map((answer) => (
                  <button
                    className={`answerButtons ${addClassBasedOnChosenAnswer(
                      answer
                    )} ${
                      answer === correctAnswer && showingCorrectAnswer
                        ? "correct"
                        : null
                    }`}
                    value={answer}
                    onClick={(event) => {
                      setChosenAnswer(answer);
                      setShowingCorrectAnswer(true);
                      if (event.target.value === correctAnswer) {
                        setScore(score + 1);
                        setTotalScore(score + 1);
                      }
                      if (currentQuestionIndex === 20) {
                        setShowRoundScore(true);
                        setBonusQuestion(true);
                      }
                    }}
                    disabled={showingCorrectAnswer ? true : false}
                  >
                    {answer}
                  </button>
                ))}
              </div>
              {showingCorrectAnswer &&
              currentQuestionIndex < Questions.length ? (
                <button
                  className="nextButton "
                  onClick={() => {
                    if (currentQuestionIndex > 0) {
                      setShowingCorrectAnswer(false);
                      setCurrentQuestionIndex(currentQuestionIndex + 1);
                      setCurrentQuestionNumber(currentQuestionNumber + 1);

                      if (currentQuestionIndex === 10) {
                        setRoundOne(false);
                      }
                      if (currentQuestionIndex === 10) {
                        setShowRoundScore(true);
                      } else {
                        setShowRoundScore(false);
                      }
                      if (currentQuestionIndex === 0) {
                        setShowTotalScore(true);
                      }
                    }
                  }}
                >
                  {currentQuestionIndex > 0 ? (
                    "Next Question"
                  ) : (
                    <Link className="homeLink" to="/">
                      Home
                    </Link>
                  )}
                </button>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
