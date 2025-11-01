import Perfil from "./components/Perfil";
import Form from "./components/Perfil/Formulario"
import ReposList from "./components/reposList";

function App() {
  return (
    <>
    <Perfil avatar="https://github.com/Guillerme00.png" name="Gui"/>
    <ReposList id="Guillerme00"/>
    <Form />
    </>
  )
}

export default App;