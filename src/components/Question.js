import React, { useEffect, useState } from 'react'
import Icons from '../assets/IconIndex'


const Question = ({ index, setIndex, questions, questionRef, value, setValue, setShowResult, recommendedProducts, setRecommendedProducts }) => {
    const question = questions[index];




    useEffect(() => {
        !questionRef.current && (questionRef.current = {})
        handleRecommendedProducts(questionRef.current);
        if (questionRef.current[question.inputName]) {
            setValue(questionRef.current[question.inputName]);
            // console.log(questionRef.current[question.inputName], questionRef)
        } else {
            setValue("");
        }
    }, [])


    useEffect(() => {
        handleRecommendedProducts(questionRef.current);
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
            console.log('back');
            localStorage.setItem("is", JSON.stringify({ index: index - 1, answers: questionRef.current }));
            setIndex(index - 1);
        }
    }

    const handleClickNext = () => {
        if (index >= questions.length - 1) {
            handleResults();
            setShowResult(true);
            return;
        } else {
            if (!questionRef.current[question.inputName] && (question.inputType === "radio" || (question.inputType === "checkbox" && value.length == 0))) {
                return;
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
                questionRef.current[question.inputName] = [...value, { id: event.target.id, value: true }]
                setValue([...value, { id: event.target.id, value: true }])
            } else {
                questionRef.current[question.inputName] = value.filter(ans => +ans.id !== +event.target.id)
                setValue(value.filter(ans => +ans.id !== +event.target.id))
            }

            switch (question.index) {
                case 5:
                    if (event.target.checked && event.target.id == 22) {
                        setRecommendedProducts(prevState => ({
                            ...prevState,
                            sleep: false
                        }))
                    } else {
                        setRecommendedProducts(prevState => ({
                            ...prevState,
                            sleep: true
                        }))
                    }
                    break
                case 6:
                    if (event.target.checked && event.target.id == 28) {
                        setRecommendedProducts(prevState => ({
                            ...prevState,
                            chill: false
                        }))
                    } else {
                        setRecommendedProducts(prevState => ({
                            ...prevState,
                            chill: true
                        }))
                    }
                    break
                case 7:
                    if (event.target.checked && event.target.id == 34) {
                        setRecommendedProducts(prevState => ({
                            ...prevState,
                            beauty: false
                        }))
                    } else {
                        setRecommendedProducts(prevState => ({
                            ...prevState,
                            beauty: true
                        }))
                    }
                    break
                case 8:
                    if (event.target.checked && event.target.id == 40) {
                        setRecommendedProducts(prevState => ({
                            ...prevState,
                            focus: false
                        }))
                    } else {
                        setRecommendedProducts(prevState => ({
                            ...prevState,
                            focus: true
                        }))
                    }
                    break
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
                                <div key={op.optID} className="question__option">
                                    <input
                                        className="question__option__input"
                                        type={question.inputType}
                                        value={op.value}
                                        id={`question__option__input--${op.optID}`}
                                        checked={value == op.value && true}
                                        onChange={(event) => { handleOnChange(event) }}
                                    />
                                    <label for={`question__option__input--${op.optID}`} className="question__option__content">
                                        {op.icon && <img className="question__option__img" src={Icons[op.icon]} alt={op.icon} />}
                                        <span className="question__option__label">{op.label}</span>
                                    </label>
                                    <br />
                                </div>
                            ))
                        }

                    </>
                )
                break;
            case "checkbox":
                input = (
                    <>
                        {
                            question.options.map((op, i) => (
                                <div key={op.optID}>
                                    <input
                                        type={question.inputType}
                                        // value={op.value}
                                        checked={Array.isArray(value) && value.find(v => +v.id === op.optID && v.value)}
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


    const handleRecommendedProducts = (answers) => {
        if (answers) {
            if (answers.FithQuestion) {
                answers.FithQuestion.find(ans => ans.id == 22) && setRecommendedProducts(prevState => ({ ...prevState, sleep: false }))

            }
            if (answers.SixthQuestion) {
                answers.SixthQuestion.find(ans => ans.id == 28) && setRecommendedProducts(prevState => ({ ...prevState, chill: false }))

            }
            if (answers.SeventhQuestion) {
                answers.SeventhQuestion.find(ans => ans.id == 34) && setRecommendedProducts(prevState => ({ ...prevState, beauty: false }))

            }
            if (answers.EighthQuestion) {
                answers.EighthQuestion.find(ans => ans.id == 40) && setRecommendedProducts(prevState => ({ ...prevState, focus: false }))
            }
        }
    }


    const handleResults = () => {
        // console.log(recommendedProducts["sleep"]);
        const products = Object.values(recommendedProducts);
        const showProducts = products.filter(el => el == true);
        console.log(showProducts.length);
        if (showProducts.length == 3) {
            if (recommendedProducts["beauty"]) {

                if (recommendedProducts["focus"]) {
                    setRecommendedProducts({
                        chill: false,
                        sleep: false,
                        beauty: true,
                        focus: true
                    })
                    return;
                }

                if (recommendedProducts["chill"]) {
                    setRecommendedProducts({
                        chill: true,
                        sleep: false,
                        beauty: true,
                        focus: false
                    })
                    return;
                }


            }
            if (recommendedProducts["focus"]) {
                if (recommendedProducts["chill"]) {
                    setRecommendedProducts({
                        chill: true,
                        sleep: false,
                        beauty: false,
                        focus: true
                    })
                    return;
                }
            }

        }
        if (showProducts.length == 4) {
            console.log("hello here");
            setRecommendedProducts({
                chill: false,
                sleep: false,
                beauty: true,
                focus: true
            })
        }
    }



    return (
        <div className="question">
            {
                index < questions.length &&
                <p className="question__name">{index + 1}. {question.question}</p>
            }
            <div className="question__options">
                {
                    index < questions.length &&
                    getQuestion(question)
                }
            </div>
            <br></br>
            <button onClick={() => { handleClickBack() }}>Back</button>
            <button onClick={() => { handleClickNext() }}>Next</button>

        </div>
    )
}
export default Question
