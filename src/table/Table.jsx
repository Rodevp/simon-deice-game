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
                />
                <Dot
                    color={COLORS.skyBlue}
                    grade={"270deg"}
                    style={{
                        right: 60
                    }}    
                />
                <Dot
                    color={COLORS.green}
                    grade={"90deg"}
                    style={{
                        left: 60
                    }}    
                />
                <Dot
                    color={COLORS.red} 
                    grade={"0deg"}
                    style={{
                        bottom: 10
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
                onClick={() => { }}
            >
                Jugar
            </button>
        </div>
    )
}

export default Table