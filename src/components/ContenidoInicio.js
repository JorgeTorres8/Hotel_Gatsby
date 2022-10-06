import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image" //optimiza las imagenes para que sean ligeras y no tarde tanto en cargar
import styled from '@emotion/styled'; //624
import {css} from '@emotion/react';

const TextoInicio = styled.div` //624
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;

    @media(min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
    }
    
    p{
        line-height: 2;
    }
`

const ContenidoInicio = () => { //621

  const informacion = useStaticQuery(graphql`
    query {
        allDatoCmsPagina(filter: {slug: {eq: "inicio"}}) {
            nodes {
                titulo,
                contenido,
                imagen {
                    gatsbyImageData(layout: FULL_WIDTH)
                }
            }
        }
    }`);

  console.log(informacion.allDatoCmsPagina.nodes[0]);

  const {titulo, contenido, imagen} = informacion.allDatoCmsPagina.nodes[0];

  return (
    <>
        <h2
            css={css` //624
                text-align: center;
                font-size: 4rem;
                margin-top: 4rem;
            `}
        >{titulo}</h2>

        <TextoInicio>
            <p>{contenido}</p>
            <GatsbyImage image={imagen.gatsbyImageData} alt="inicio"/>
        </TextoInicio>
    </>
  )
}

export default ContenidoInicio;