import { useState } from "react"
import Header from "./header/Header"
import Message from "./message/Message"
import Table from "./table/Table"

function App() {

  const [winMessage, setWimMesage] = useState("")
  const [loseMessage, setLoseMesage] = useState("")


  return (
    <>
      <Header />
      <Message
        messageWin={winMessage}
        messageLose={loseMessage}
      />
      <Table
        setWimMesage={setWimMesage}
        setLoseMesage={setLoseMesage}
      />
    </>
  )
}

export default App
