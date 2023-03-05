import styles from "./msg.module.css"
import { COLORS } from "../colors"

function Message({ message }) {
    return (
        <div
            className={styles.msgTable}
        >
            <h2
                className={styles.msg}
                style={{ color: COLORS.white }}
            >
                {message}
            </h2>
        </div>
    )
}

export default Message