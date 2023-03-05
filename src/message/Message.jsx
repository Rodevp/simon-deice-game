import styles from "./msg.module.css"
import { COLORS } from "../colors"

function Message({ messageWin, messageLose }) {
    return (
        <div
            className={styles.msgTable}
        >
            <h2
                className={styles.msg}
                style={{ color: COLORS.white }}
            >
                {
                    messageWin !== "" && messageWin
                }
                {
                    messageLose !== "" && messageLose
                }
            </h2>
        </div>
    )
}

export default Message