import React from "react"

export default function App() {
  const [display, setDisplay] = React.useState("")
  const buttonOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-', '*', '/'];

  function getDisplay(a) {
    setDisplay(display + a)
  }
  function getAns() {
    setDisplay(eval(display))
  }
  function clear() {
    setDisplay("")
  }
  return (
    <div className="section">
    <section>
      <header className="header">Calculator</header>
      <div className="display">
        {display}
      </div>
      <div className="calculator">
        {buttonOptions.map((option, index) => (
          <button key={index} onClick={() => getDisplay(option)}>
            {option}
          </button>
        ))}
        <button onClick={() => getAns()}>=</button>
        <button onClick={() => clear()}>AC</button>

      </div>
    </section>
    </div>
  )
}