import { useState, useEffect } from "react"
import styles from "./table.module.css"
import { COLORS } from "../colors"


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
            const id = messageWin()
            clearTimeout(id)
            setSequencePlayer([])
        }

        if (
            sequence.length > 0 &&
            JSON.stringify(sequence) !== JSON.stringify(sequencePlayer)
        ) {
            const id = messageLose()
            clearTimeout(id)
            setUserIsInGame(false)
            setLevel(1)
            setSequencePlayer([])
        }

    }

    const messageWin = () => {

        const messages = ["¡Genial!", "¡Increible!", "¡WOW!"]
        const randomNumber = Math.floor(Math.random() * messages.length)
        setWimMesage(messages[randomNumber])
        setLoseMesage("")
        const id = setTimeout(() => {
            setWimMesage("")
        }, 1000)

        return id

    }

    const messageLose = () => {
        setLoseMesage("¡Oh No!😢")
        const id = setTimeout(() => {
            setLoseMesage("")
        }, 1000)

        return id
    }

    const highLightButton = (color) => {
        
        let idTimeout;
        const button = document.getElementById(color)
        button.style.opacity = "0.5"

        setTimeout(() => {
            button.style.opacity = "1"
        }, 500)
        console.log('id sequence tm', id)
        return idTimeout

    }

    const playSequence = () => {
        
        const startSequence = sequenceColor()

        startSequence.forEach((color, i) => {
            
            const id = highLightButton(color)
            clearTimeout(id)

        })
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