import styled from "styled-components"
import ComponeteNavegacao from "./componeteNavegacao";

const ContainerNavBar = styled.div`

    z-index: 1;
    width: 100%;
    height: auto;
    display: flex;
    gap: 5%;
    justify-content: flex-end;
`

const NavBar = () => {
    return(
        <ContainerNavBar>
            <ComponeteNavegacao texto = 'Sobre mim' />
            <ComponeteNavegacao texto = 'Projetos' />
            <ComponeteNavegacao texto = 'Contatos' />
        </ContainerNavBar>
    )
}

export default NavBar;