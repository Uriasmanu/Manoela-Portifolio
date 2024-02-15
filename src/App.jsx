import EstilosGlobais from "./assets/componentes/estilosGlobais"
import styled from "styled-components"
import NavBar from "./assets/componentes/navBar"
import Inicio from "./assets/componentes/inicio"

const AppContainer = styled.div`
    padding: 2% 10%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 6rem;
    width: 85%;
`

function App() {

  return (
    <AppContainer>
      <EstilosGlobais/>
      <NavBar/>
      <Inicio/>
    </AppContainer>
  )
}

export default App
