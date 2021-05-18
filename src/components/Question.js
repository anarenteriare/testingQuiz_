import React, { useEffect, useState } from 'react'

const Question = ({ index, setIndex, questions, questionRef, value, setValue }) => {
    const question = questions[index];
    const [answers, setAnswers] = useState([]);
    // const [checked, setChecked] = useState( question.current ? true : false);
    // const {options} = ques[index];
   


    useEffect(() => {
        !questionRef.current && (questionRef.current = {})
        if (questionRef.current && questionRef.current[question.inputName]) {
            setValue(questionRef.current[question.inputName]);
            
        } else {
            setValue("");
        }
        
        
    }, [])

    useEffect(() => {
        if (questionRef.current && questionRef.current[question.inputName]) {
            setValue(questionRef.current[question.inputName]);
            
        } else {
            setValue("");
        }

      

        
        
    }, [index])


    const handleClickBack = () => {
        if (index == 0) {
            setIndex(0)
        } else {
            if (!questionRef.current[question.inputName] && question.inputType == "radio" || question.inputType == "checkbox" && answers.length == 0) {
                return;
            }
            localStorage.setItem("is", JSON.stringify({ index: index - 1, answers: questionRef.current }));
            setIndex(index - 1);
        }
    }
    const handleClickNext = () => {
        if (index >= questions.length) {
            setIndex(questions.length - 1);
        } else {
            if (!questionRef.current[question.inputName] && question.inputType == "radio" || question.inputType == "checkbox" && answers.length == 0) {
                return;
            }
            if (question.inputType == "checkbox") {
                questionRef.current[question.inputName] = answers;
                setAnswers([]);
            }
            localStorage.setItem("is", JSON.stringify({ index: index + 1, answers: questionRef.current }));
            setIndex(index + 1)
        }
    }

    const handleOnChange = (event) => {
        if (question.inputType == "radio") {
            questionRef.current[question.inputName] = event.target.value;
            setValue(event.target.value);
        } else {
            //  checKbox behaviour
            if (event.target.checked) {
                setAnswers((prevState) => ([...prevState, {
                    id: event.target.id,
                    value: true
                }]));

            } else {
                setAnswers((prevState) => {
                    const updatedAnswers = [...prevState].filter(ans => ans.id !== event.target.id);
                    return updatedAnswers;
                })

            }
        }
    }

    const getQuestion = (question) => {
        let input = null;
        switch (question.inputType) {
            case "radio":
                input = (
                    <>
                        {
                            question.options.map((op) => (
                                <div key={op.optID}>
                                    <input
                                        type={question.inputType}
                                        value={op.value}
                                        checked={value == op.value && true}
                                        onChange={(event) => { handleOnChange(event) }}
                                    />
                                    <label>{op.label}</label>
                                    <br />
                                </div>
                            ))
                        }

                    </>
                )
                break;
            case "checkbox":
                if (Array.isArray(value)) {
                    // console.log(value);
                }
                
                input = (
                    <>
                        {
                            question.options.map((op, i) => (
                                <div key={op.optID}>
                                    <input
                                        type={question.inputType}
                                        value={op.value}
                                        id={op.optID}
                                        onChange={(event) => { handleOnChange(event) }}
                                    />
                                    <label>{op.label}</label>
                                    <br />
                                </div>
                            ))
                        }

                    </>
                )
                break;
        }

        return input;
    }



    return (
        <div style={{ padding: "50px" }}>

            {
                index < questions.length &&
                <p>{question.question}</p>

            }
            {
                index < questions.length &&
                getQuestion(question)
            }

            <br></br>
            <button onClick={() => { handleClickBack() }}>Back</button>
            <button onClick={() => { handleClickNext() }}>Next</button>

        </div>
    )
}

export default Question
