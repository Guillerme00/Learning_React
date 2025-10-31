function App() {
  const nome = "Gui";
  function returnName(name) {
    return name
  }

  const Eu = {
    name: "gui",
    age: 20,
  }

  return(
    <>
      <h1>Ola, {returnName(nome)}</h1>
      <h2>Subtittle</h2>
      <h3>{Eu.name}</h3>
    </>
  )
}
export default App
