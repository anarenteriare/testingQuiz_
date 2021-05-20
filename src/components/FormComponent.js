import React, { createRef, useEffect, useState } from 'react'
import { questions } from '../data/questions'
import ProgressBar from './ProgressBar'
import Question from './Question'
import "./_styles.scss";

const FormComponent = () => {
    const [index, setIndex] = useState(0)
    const [questionRef] = useState(createRef());
    const actualQuestion = questions[index];
    const [value, setValue] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [recommendedProducts, setRecommendedProducts] = useState({
        sleep: true,
        chill: true,
        beauty: true,
        focus: true
    });

    useEffect(() => {
        const info = JSON.parse(localStorage.getItem("is"));
        if (info) {
            setIndex(info.index);
            questionRef.current = info.answers;
            if (questionRef.current && questionRef.current[actualQuestion.inputName]) {
                setValue(questionRef.current[actualQuestion.inputName]);

            } else {
                setValue("");
            }
        }

    }, [])

    return (
        <div style={{ width: "80%", margin: "20px auto" }}>
            {
                !showResult ?
                    <>
                        <ProgressBar index={index} questions={questions} />
                        <Question index={index} setIndex={setIndex} questions={questions} questionRef={questionRef} value={value} setValue={setValue} setShowResult={setShowResult} recommendedProducts={recommendedProducts} setRecommendedProducts={setRecommendedProducts} />
                    </>
                    :
                    <>
                        <h1>Fin del quiz</h1>

                    </>
            }

        </div>
    )
}

export default FormComponent