import EstilosGlobais from "./assets/componentes/estilosGlobais"
import styled from "styled-components"
import Inicio from "./assets/componentes/inicio"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Projetos from "./assets/projetos"
import NavBar from "./assets/componentes/navBar"


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
    <BrowserRouter>
      <AppContainer>
        <EstilosGlobais />
        <NavBar/>
        <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/projetos' element={<Projetos />}/>
        </Routes>
      </AppContainer>
    </BrowserRouter>
  )
}

export default App
