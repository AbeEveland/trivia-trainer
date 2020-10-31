import React from 'react';
import triviaGame from "./triviaGame";

export class Question extends React.Component 
{
  render(){
 

  
  

  return (
    <>
    <div className="question">
      <p >{this.props.id}</p>
      <p>{this.props.title}</p>
      <p>{this.props.incorrect}</p>
      <p>{this.props.correct}</p>
     
  
  </div>
</>
  );
}
}

export default Question;
