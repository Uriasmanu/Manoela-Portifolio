import React from 'react';
import styled from 'styled-components';
import projetosData from './projetos.json'; 

import imagens from `./imagens/imagem${i}`

// Estilizando a galeria
const Gallery = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin: 20px;
`;

// Estilizando o cartão do projeto
const ProjectCard = styled.div`
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Projetos = () => {
    return (
        <Gallery>
            {projetosData.projetos.map(projeto => (
                <ProjectCard key={projeto.id}>
                    <img src={require(`./imagens/imagem${projeto.id}.png`).default}  alt={projeto.titulo} />
                    <div>
                        <h3>{projeto.titulo}</h3>
                        <p>{projeto.descricao}</p>
                        <a href={projeto.link} target="_blank" rel="noopener noreferrer">Ver Projeto</a>
                    </div>
                </ProjectCard>
            ))}
        </Gallery>
    );
}

export default Projetos;
