import React from 'react'
import {Answer} from './'

const AnswersList = ({answers, select}) => {
  return(
    <div className="c-grid__answer">
      {answers.map((answer, index) => {
       return <Answer answer={answer} key={index.toString()} select={select} />
      })}
    </div>
  );
}

export default AnswersList;
