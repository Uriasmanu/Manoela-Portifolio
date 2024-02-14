import styled from "styled-components"

const Texto = styled.div`
    P{
        color : #fff; 
        font-size: 18px;
        
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