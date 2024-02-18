import React from 'react';
import styled from 'styled-components';
import projetosData from './projetos.json';
import imagem1 from '../../../public/imagens/imagem1.png'; // Importe a imagem aqui

// Estilizando a galeria
const Gallery = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
`;

// Estilizando o cartão do projeto
const ProjectCard = styled.div`
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 45%;
  height: 30%;

  img {
    width: 100%;
    height: 60%;
  }
`;

const Projetos = () => {
  return (
    <Gallery>
      {projetosData.projetos.map((projeto) => (
        <ProjectCard key={projeto.id}>
          <img src={projeto.imagem} alt={projeto.titulo} />
          <div>
            <h3>{projeto.titulo}</h3>
            <p>{projeto.descricao}</p>
            <a href={projeto.link} target="_blank" rel="noopener noreferrer">
              Ver Projeto
            </a>
          </div>
        </ProjectCard>
      ))}
    </Gallery>
  );
};

export default Projetos;
