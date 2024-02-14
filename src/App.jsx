import EstilosGlobais from "./assets/componentes/estilosGlobais"
import styled from "styled-components"
import NavBar from "./assets/componentes/navBar"

const AppContainer = styled.div`
  padding: 2% 10%;
`

function App() {

  return (
    <AppContainer>
      <EstilosGlobais/>
      <NavBar/>
    </AppContainer>
  )
}

export default App
