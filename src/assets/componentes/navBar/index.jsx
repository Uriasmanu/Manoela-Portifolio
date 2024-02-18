import styled from "styled-components"
import ComponeteNavegacao from "./componeteNavegacao";

const ContainerNavBar = styled.div`

    z-index: 1;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-end;
`

const NavBar = () => {
    return(
        <ContainerNavBar>
            <ComponeteNavegacao texto = 'Sobre mim' to='/' />
            <ComponeteNavegacao texto = 'Projetos' to='/projetos'/>
            <ComponeteNavegacao texto = 'Contatos' to='/contatos' />
        </ContainerNavBar>
    )
}

export default NavBar;