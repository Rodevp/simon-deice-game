import { useState, useEffect } from "react"
import styles from "./table.module.css"
import { COLORS } from "../colors"

import "./active.css"

function Dot({ color, grade, style, action, id = "" }) {
    return (
        <div
            id={id}
            onClick={action}
            className={styles.dot}
            style={{
                backgroundColor: color,
                width: 140,
                height: 120,
                transform: `rotate(${grade})`,
                ...style
            }}
        >

        </div>
    )
}


function Table({ setWimMesage, setLoseMesage }) {

    const [sequence, setSequence] = useState([])
    const [sequencePlayer, setSequencePlayer] = useState([])
    const [quantityTabs, setQuantityTabs] = useState(0)
    const [level, setLevel] = useState(1)
    const [userIsInGame, setUserIsInGame] = useState(false)
    const [time, setTime] = useState(1000)

    const colors = ["yellow", "blue", "red", "green"]

    const getColor = () => {
        const randomNumber = Math.floor(Math.random() * colors.length)
        return colors[randomNumber]
    }

    const sequenceColor = () => {

        const newSequencie = [];

        for (let i = 0; i < level; i++) {
            newSequencie.push(getColor());
        }

        setSequence(newSequencie);
        setLevel(level + 1);

        return newSequencie

    }

    const checkSequence = () => {

        if (
            sequence.length > 0 &&
            JSON.stringify(sequence) === JSON.stringify(sequencePlayer)
        ) {
            playSequence()
            messageWin()
            setSequencePlayer([])
        }

        if (
            sequence.length > 0 &&
            JSON.stringify(sequence) !== JSON.stringify(sequencePlayer)
        ) {
            messageLose()
            setUserIsInGame(false)
            setLevel(1)
            setSequencePlayer([])
        }

    }

    const messageWin = () => {

        const messages = ["¡Genial!", "¡Increible!", "¡WOW!"]
        const randomNumber = Math.floor(Math.random() * messages.length)
        setWimMesage(messages[randomNumber])
        
        const id = setTimeout(() => {
            setWimMesage("")
        }, 1000)

        clearTimeout(id)

    }

    const messageLose = () => {
        setLoseMesage("¡Oh No!😢")
        const id = setTimeout(() => {
            setLoseMesage("")
        }, 1000)

        clearTimeout(id)
    }


    const playSequence = () => {
        
        const startSequence = sequenceColor()
        let step = 0
        let idInterval;

        idInterval = setInterval(() => {

            const element = window.document.getElementById(startSequence[step])

            element?.classList.add('active')

            let id = setTimeout(() => { 
                element?.classList.remove('active')
             }, time / 2)
            
            if (step === startSequence.length) {
                clearTimeout(id)
                clearInterval(idInterval)
            }

            step++

        }, time)


    }

    useEffect(() => {

        if (sequence.length === sequencePlayer.length) {
            checkSequence()
            setQuantityTabs(0)
        }

    }, [quantityTabs])

    return (
        <div
            className={styles.table}
        >
            <div
                className={styles.contentDot}
            >
                <Dot
                    color={COLORS.yellow}
                    grade={"180deg"}
                    style={{
                        top: 10
                    }}
                    action={() => {
                        setSequencePlayer([...sequencePlayer, "yellow"])
                        setQuantityTabs(quantityTabs + 1)
                    }}
                    id="yellow"
                />
                <Dot
                    color={COLORS.skyBlue}
                    grade={"270deg"}
                    style={{
                        right: 60
                    }}
                    action={() => {
                        setSequencePlayer([...sequencePlayer, "blue"])
                        setQuantityTabs(quantityTabs + 1)
                    }}
                    id="blue"
                />
                <Dot
                    color={COLORS.green}
                    grade={"90deg"}
                    style={{
                        left: 60
                    }}
                    action={() => {
                        setSequencePlayer([...sequencePlayer, "green"])
                        setQuantityTabs(quantityTabs + 1)
                    }}
                    id="green"
                />
                <Dot
                    color={COLORS.red}
                    grade={"0deg"}
                    style={{
                        bottom: 10
                    }}
                    action={() => {
                        setSequencePlayer([...sequencePlayer, "red"])
                        setQuantityTabs(quantityTabs + 1)
                    }}
                    id="red"
                />
            </div>

            <button
                className={styles.button}
                style={{
                    backgroundColor: userIsInGame ? 'gray' : COLORS.purple,
                    border: `1px solid ${COLORS.white}`,
                    color: COLORS.white,
                }}
                onClick={() => {
                    setUserIsInGame(true)
                    playSequence()
                }}
                disabled={userIsInGame}
            >
                Jugar
            </button>
        </div>
    )
}

export default Table