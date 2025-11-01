import Perfil from "./components/Perfil";
import Form from "./components/Formulario"
import ReposList from "./components/reposList";

function App() {
  const id = "Guillerme00"
  return (
    <>
    <Perfil id={id}/>
    <ReposList id={id}/>
    <Form />
    </>
  )
}

export default App;