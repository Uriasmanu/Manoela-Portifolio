import styled from "styled-components"

import logo from '../../../../public/Imagem.png'

const ContainerInicio = styled.div`
    color: #fff;
    display: flex;
    align-items: center;

    h1{
        font-size: 3em;
    }

    p{
        font-size: 1.5em;
        width: 80%;
    }
`

const Caixa = styled.div`

`

const Inicio = () =>{
    return(
        <ContainerInicio>
            <Caixa>
            <h1>Olá, eu sou a Manoela Urias</h1>
            <p>Eu sou uma desenvolvedora com foco no Front-end e trabalho principalmete com o React.Js</p>
            </Caixa>
            <img src={logo} alt="" />
        
        </ContainerInicio>
    )
}

export  default Inicio; 