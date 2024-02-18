import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
    text-decoration: none; /* Remove o sublinhado */
    color: #fff; /* Define a cor do texto */
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
`;

const Texto = styled.div`
        width: 12%;
`

const ComponeteNavegacao = ({ texto, to }) => {
    return (
        <Texto>
            <StyledLink to={to}>{texto}</StyledLink>
        </Texto>
    );
}

export default ComponeteNavegacao;
