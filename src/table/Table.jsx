import { useState, useEffect } from "react"
import styles from "./table.module.css"
import { COLORS } from "../colors"


function Dot({ color, grade, style, action }) {
    return (
        <div
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



function Table() {

    const [sequence, setSequence] = useState([])
    const [level, setLevel] = useState(2)

    const getColor = () => {
        const colors = ["yellow", "blue", "red", "green"]
        const randomNumber = Math.floor(Math.random() * colors.length)
        return colors[randomNumber]
    }

    const sequenceColor = () => {

        if (level === 1) {
            const copy = [...sequence]
            copy.push(getColor())
            setSequence(copy)
        } 


        if (level > 1) {
            let flag = []
            for (let i = 0; i < level; i++) {
                flag.push(getColor())
            }
            setSequence(flag)
        }

    }


    useEffect(() => {

    }, [])

    return (
        <div
            className={styles.table}
        >
            <span>{JSON.stringify(sequence)}</span>
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
                    }}
                />
                <Dot
                    color={COLORS.skyBlue}
                    grade={"270deg"}
                    style={{
                        right: 60
                    }}
                    action={() => {
                    }}
                />
                <Dot
                    color={COLORS.green}
                    grade={"90deg"}
                    style={{
                        left: 60
                    }}
                    action={() => {
                    }}
                />
                <Dot
                    color={COLORS.red}
                    grade={"0deg"}
                    style={{
                        bottom: 10
                    }}
                    action={() => {
                    }}
                />
            </div>
            <button
                className={styles.button}
                style={{
                    backgroundColor: COLORS.purple,
                    border: `1px solid ${COLORS.white}`,
                    color: COLORS.white
                }}
                onClick={() => {
                    sequenceColor()
                }}
            >
                Jugar
            </button>
        </div>
    )
}

export default Table