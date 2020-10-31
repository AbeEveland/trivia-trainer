import React, { useState } from "react";
import Questions from "../sampleQuestions";
import Question from "./Question";

export function Game() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [showingCorrectAnswer, setShowingCorrectAnswer] = useState(false);
  const [chosenAnswer, setChosenAnswer] = useState("");

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
  function addClassBasedOnChosenAnswer() {
    if (chosenAnswer === Questions[currentQuestion].correct) {
      return "correct";
    } else if (chosenAnswer === Questions[currentQuestion].incorrect) {
      return "wrong";
    } else {
      return null;
    }
  }
  console.log(addClassBasedOnChosenAnswer());
  return (
    <>
      {showScore ? (
        <div className="gameContainer">
          <div className="showScoreContainer">
            <div className="question showScore">
              You scored... {score} out of {Questions.length}!
            </div>
          </div>
        </div>
      ) : (
        <div className="showScore">
          <div className="gameContainer">
            <div className="Game">
              <div className="question">
                <h1>
                  Question {currentQuestion + 1} /{Questions.length}
                </h1>
                <h2>{Questions[currentQuestion].question}</h2>
              </div>

              <div className="answerContainer">
                {mixAnswers(
                  Questions[currentQuestion].correct,
                  Questions[currentQuestion].incorrect
                ).map((answer) => (
                  <button
                    className={`answerButtons ${addClassBasedOnChosenAnswer()}`}
                    onClick={() => {
                      setChosenAnswer(answer);
                      setShowingCorrectAnswer(true);
                      const addToScore = score + 1;
                      if (answer === Questions[currentQuestion].correct) {
                        setScore(addToScore);
                      }
                    }}
                    disabled={showingCorrectAnswer ? true : false}
                  >
                    {answer}
                  </button>
                ))}
              </div>
              {showingCorrectAnswer ? (
                <button
                  className="nextButton "
                  onClick={() => {
                    const nextQuestion = currentQuestion + 1;
                    if (nextQuestion < 3) {
                      setCurrentQuestion(nextQuestion);
                    } else {
                      setShowScore(true);
                    }
                    setShowingCorrectAnswer(false);
                    // setCurrentQuestion(currentQuestion + 1);
                  }}
                >
                  Next Question
                </button>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
