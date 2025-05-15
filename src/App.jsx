import { useState } from "react"

export function App() {
  const [numero, setNumero] = useState(10)

  function handleAumentar() {
    setNumero(numero + 1)
    console.log(numero)
  }


  return (
    <section>
      <h1>App</h1>

      <div>
        <h2>numero: {numero}</h2>

        <button onClick={handleAumentar}>Aumentar</button>
      </div>
    </section>
  )
}