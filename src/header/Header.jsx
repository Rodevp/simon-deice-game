import styles from "./header.module.css"
import Logo from "../assets/table.png"
import { COLORS } from "../colors"

function Header() {
  return (
    <header
        className={styles.header}
        style={{ backgroundColor: COLORS.purple, color: COLORS.white  }}
    >
        <img
            className={styles.img}
            src={Logo}
            alt="logo simon dice game"
        />
        <h1
           className={styles.title}
           style={{ color: COLORS.white  }} 
        >
            Simon Dice
        </h1>
    </header>
  )
}

export default Header