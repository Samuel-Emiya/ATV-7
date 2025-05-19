import { useState } from "react"

export function App() {
  const [numero, setNumero] = useState(100)
  const [mostrar, setMostrar] = useState(false)

  function handleAumentar() {
    setNumero(numero + 100)
    console.log(numero)
  }

  function changeFalse() {
    mostrar === false ? setMostrar(true) : setMostrar(false)
    console.log(mostrar)

  }


  return (
    <section>
      <h1>App</h1>

      <div>
        <h2>numero: {numero}</h2>

        <button onClick={handleAumentar}>Aumentar</button>

        <button onClick={changeFalse}>{mostrar === true ? "Esconder" : "Mostrar"}</button>

        {mostrar === false ? "" : <p>AI meu</p>}
      </div>
    </section>
  )
}