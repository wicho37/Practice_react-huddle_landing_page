import React from "react"
import Header from "./components/Header/Header"
import Huddle from "./components/BodyHuddle/Huddle"
import "./App.css"




function App () {
      return (
        <div className="container_Body">
            <Header />
            <Huddle />
        </div>
      )
}

export default App