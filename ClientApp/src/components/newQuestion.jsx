import React  from "react";
import {useState} from 'react';
import Question from "./Question";
import sampleQuestions from '../sampleQuestions'
import triviaGame from "./triviaGame";



export function NewQuestion() {
  const sampleTriviaQuestionsId = sampleQuestions.map(question => (
    <Question key ={question.id}id={question.id} />
    ))
    const sampleTriviaQuestions = sampleQuestions.map(question => (
      <Question key ={question.id}title={question.question} />
      )) 
       const sampleTriviaQuestionsCorrectAnswers = sampleQuestions.map(question => (
        <Question key ={question.id}id={question.correct} />
        ))
        const sampleTriviaQuestionsIncorrectAnswers = sampleQuestions.map(question => (
          <Question key ={question.id}id={question.incorrect} />
          ))
  // const [currentQuestion, setCurrentQuestion] = useState(sampleTriviaQuestions)
  return(
    <>
    <ul>

    <li>
      {sampleTriviaQuestionsId[0]}
      </li>
    <li>
      {sampleTriviaQuestions[0]}
      </li>
    <li>
      {sampleTriviaQuestionsCorrectAnswers[0]}
      </li>
      <li>
        {sampleTriviaQuestionsIncorrectAnswers[0]}
        </li>
    </ul>


</>
)
}