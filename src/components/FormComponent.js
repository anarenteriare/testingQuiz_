import React, { createRef, useEffect, useState } from 'react'
import { questions } from '../data/questions'
import Question from './Question'

const FormComponent = () => {
    const [index, setIndex] = useState(0)
    const [questionRef] = useState(createRef());
    const actualQuestion = questions[index];
    const [value, setValue] = useState("");


    useEffect( () => {
        const info = JSON.parse(localStorage.getItem("is"));
        if(info){
            setIndex(info.index);
            questionRef.current = info.answers; 
            if(questionRef.current && questionRef.current[actualQuestion.inputName]){
                setValue(questionRef.current[actualQuestion.inputName]);
                
            }else{
                setValue("");
            }
        }
        
    },[])

    // useEffect( () => {
    //     // console.log(questionRef.current[actualQuestion.inputName]);
    //     if(questionRef.current && questionRef.current[actualQuestion.inputName]){
    //         setValue(questionRef.current[actualQuestion.inputName]);
            
    //     }else{
    //         setValue("");
    //     }
        
    // })

    return (
        <div>
           
            <Question index={index} setIndex={setIndex} questions={questions} questionRef={questionRef} value={value} setValue={setValue}/>     
                 
        </div>
    )
}

export default FormComponent

