

export const questions = [
    {
        index: 1,
        inputType: "radio",
        inputName: "firstQuestion",
        question: "First, how often do you suffer from digestive discomfort?",
        options: [
            {
                optID: 1,
                label: "Hardly ever.",
                value: 1,
                isChecked: false
            },
            {
                optID: 2,
                label: "Now and then.",
                value: 2,
                isChecked: false,
            },
            {
                optID: 3,
                label: "Ugh!  Practically all the time.",
                value: 3,
                isChecked: false
            }
        ]
    },

    {
        index: 2,
        inputType: "radio",
        inputName: "secondQuestion",
        question: "Do you ever suffer with…",
        options: [
            {
                optID: 4,
                label: "Irregular bowel movements",
                value: 1,
                isChecked: false
            },
            {
                optID: 5,
                label: "Stomach upset",
                value: 2,
                isChecked: false
            },
            {
                optID: 6,
                label: "Gas and bloating",
                value: 3,
                isChecked: false
            },
            {
                optID: 7,
                label: "Cramping",
                value: 4,
                isChecked: false
            },
            {
                optID: 8,
                label: "Belching",
                value: 5,
                isChecked: false
            },
            {
                optID: 9,
                label: "None.  I’m good!",
                value: 6,
                isChecked: false
            }
        ]

    },
    {
        index: 3,
        inputType: "checkbox",
        inputName: "ThirdQuestion",
        question: "What do you currently take for your digestive issues? [check all that apply]",
        options: [
            {
                optID: 10,
                label: "A probiotic ",
                value: 1,
                isChecked: false
            },
            {
                optID: 11,
                label: "An over-the-counter remedy",
                value: 2,
                isChecked: false
            },
            {
                optID: 12,
                label: "I don’t take anything, but I want to be proactive about my health.",
                value: 3,
                isChecked: false
            },
            {
                optID: 13,
                label: "I’ve tried everything. Nothing seems to work!",
                value: 4,
                isChecked: false
            }
        ]
    },
    {
        index: 4,
        inputType: "radio",
        inputName: "FourthQuestion",
        question: "Kombucha is a fermented tea that yields some great benefits for digestive health.  Have you ever tried Kombucha",
        options: [
            {
                optID: 14,
                label: "Yes! Love it!",
                value: 1,
                isChecked: false
            },
            {
                optID: 15,
                label: "Love the health benefits. Hate the taste.",
                value: 2,
                isChecked: false
            },
            {
                optID: 16,
                label: "Kombucha? What’s that? ",
                value: 3,
                isChecked: false
            }
        ]
    },
    {
        index: 5,
        inputType: "checkbox",
        inputName: "FithQuestion",
        question: "Your gut health affects your overall health, too. For example, do you have trouble sleeping? [check all that apply]",
        options: [
            {
                optID: 17,
                label: "It takes a long time to fall asleep",
                value: 1,
                isChecked: false
            },
            {
                optID: 18,
                label: "I have trouble sleeping through the night",
                value: 2,
                isChecked: false
            },
            {
                optID: 19,
                label: "My mind races and I can’t sleep",
                value: 3,
                isChecked: false
            },
            {
                optID: 20,
                label: "I toss and turn ",
                value: 4,
                isChecked: false
            },
            {
                optID: 21,
                label: "I find it difficult to get back to sleep",
                value: 5,
                isChecked: false
            },
            {
                optID: 22,
                label: "I’m lucky. I sleep like a baby every night",
                value: 6,
                isChecked: false
            },
        ]
    },
    {
        index: 6,
        inputType: "checkbox",
        inputName: "SixthQuestion",
        question: "Do you usually feel… [check all that apply]",
        options: [
            {
                optID: 23,
                label: "Moody ",
                value: 1,
                isChecked: false
            },
            {
                optID: 24,
                label: "Irritable",
                value: 2,
                isChecked: false
            },
            {
                optID: 25,
                label: "Stressed",
                value: 3,
                isChecked: false
            },
            {
                optID: 26,
                label: "Relaxed and happy",
                value: 4,
                isChecked: false
            },
            {
                optID: 27,
                label: "All over the place",
                value: 5,
                isChecked: false
            },
            {
                optID: 28,
                label: "I can’t get into the Zen Zone no matter how hard I try",
                value: 6,
                isChecked: false
            },
        ]
    },
    {
        index: 7,
        inputType: "checkbox",
        inputName: "SeventhQuestion",
        question: "Select ALL of your skin concerns…[check all that apply]",
        options: [
            {
                optID: 29,
                label: "Dullness",
                value: 1,
                isChecked: false
            },
            {
                optID: 30,
                label: "Dry and rough",
                value: 2,
                isChecked: false
            },
            {
                optID: 31,
                label: "Occasional breakouts",
                value: 3,
                isChecked: false
            },
            {
                optID: 32,
                label: "Lacks firmness",
                value: 4,
                isChecked: false
            },
            {
                optID: 33,
                label: "Fine lines and wrinkles",
                value: 5,
                isChecked: false
            },
            {
                optID: 34,
                label: "None. My skin is gorgeous!",
                value: 6,
                isChecked: false
            },
        ]
    },
    {
        index: 8,
        inputType: "checkbox",
        inputName: "EighthQuestion",
        question: "Do you have trouble… [check all that apply]",
        options: [
            {
                optID: 35,
                label: "Concentrating",
                value: 1,
                isChecked: false
            },
            {
                optID: 36,
                label: "Retaining new information",
                value: 2,
                isChecked: false
            },
            {
                optID: 37,
                label: "Staying alert",
                value: 3,
                isChecked: false
            },
            {
                optID: 38,
                label: "Juggling multiple projects",
                value: 4,
                isChecked: false
            },
            {
                optID: 39,
                label: "Keeping on track",
                value: 5,
                isChecked: false
            },
            {
                optID: 40,
                label: "None of these",
                value: 6,
                isChecked: false
            },
        ]
    },
    {
        index: 9,
        inputType: "checkbox",
        inputName: "NinthQuestion",
        question: "Last question…I looking for a little more… [check up to 2]",
        options: [
            {
                optID: 41,
                label: "Concentrating",
                value: 1,
                isChecked: false
            },
            {
                optID: 42,
                label: "Restful sleep",
                value: 2,
                isChecked: false
            },
            {
                optID: 43,
                label: "Skin support",
                value: 3,
                isChecked: false
            },
            {
                optID: 44,
                label: "Zen",
                value: 4,
                isChecked: false
            }
        ]
    },
]