import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image" //optimiza las imagenes para que sean ligeras y no tarde tanto en cargar
import styled from '@emotion/styled'; //624
import {css} from '@emotion/react';

const Contenido = styled.main` //626
    margin-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;

    @media(min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
    }
    p {
        line-height: 2;
        margin-top: 2rem;
    }

`   

const ContenidoNosotros = () => { //625

    const resultado = useStaticQuery(graphql`
    query {
        allDatoCmsPagina(filter: {slug: {eq: "nosotros"}}) {
            nodes {
                titulo,
                contenido,
                imagen {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
        }
    }`);

    const {titulo, contenido, imagen} = resultado.allDatoCmsPagina.nodes[0];

    return (
        <>
            <h2
                css={css` //626
                    margin-top: 4rem;
                    text-align: center;
                    font-size: 4rem;
                `}
            >{titulo}</h2>

            <Contenido>
                <p>{contenido}</p>
                <GatsbyImage image={imagen.gatsbyImageData} alt="nosotros"/>
            </Contenido>
        </>
    )
}

export default ContenidoNosotros;