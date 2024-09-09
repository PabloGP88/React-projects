import { useState, useCallback } from "react";

import QUESTIONS from '../questions.js'
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz()
{
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex == QUESTIONS.length;

    const handleSelectedAnswer = useCallback(function handleSelectAnswer(selectedAnswer)
    {
        setUserAnswers((prevAnswers) => {
            return [...prevAnswers,selectedAnswer]
        });
    }, []);
    
    const handleSkipAnswer = useCallback(() => handleSelectedAnswer(null), [handleSelectedAnswer])

    if (quizIsComplete)
    {
        return <Summary  userAnswers={userAnswers}></Summary>
    } 

    return(
        <div id="quiz">
           <Question 
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSelectAnswer={handleSelectedAnswer}
                onSkipAnswer={handleSkipAnswer}>    
            </Question>
        </div>
    );
}