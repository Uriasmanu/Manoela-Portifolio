import styled from "styled-components"

const Texto = styled.div`
    P{
        color : #fff; 
        font-size: 1.5rem;
        font-weight: bold;
        cursor: pointer;
    }
`

const ComponeteNavegacao = ({ texto }) => {
    return (
        <Texto>
            <p>{texto}</p>
        </Texto>
    )
}

export default ComponeteNavegacao