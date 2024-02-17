import styled from "styled-components"

import logo from '../../../../public/Imagem.png'
import NavBar from "../navBar"

const ContainerInicio = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;

    h1{
        font-size: 3em;
    }

    p{
        font-size: 1.5em;
        width: 80%;
    }
`

const Caixa = styled.div`
    display: flex;
    align-items: center;

`
const ContainerTextos = styled.div`
`

const Inicio = () => {
    return (
        <ContainerInicio>
            <Caixa>
                <ContainerTextos>
                    <h1>Olá, eu sou a Manoela Urias</h1>
                    <p>Eu sou uma desenvolvedora com foco no Front-end e trabalho principalmete com o React.Js</p>
                </ContainerTextos>
                <img src={logo} alt="" />
            </Caixa>


        </ContainerInicio>
    )
}

export default Inicio; 