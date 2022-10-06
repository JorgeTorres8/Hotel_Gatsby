import React from 'react'
import Layout from './layout'; //634
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { css } from '@emotion/react'; //635

    //633
export const query = graphql` 
    query($slug: String!) {
        allDatoCmsHabitacion(filter: {slug: {eq: $slug}}) {
            nodes {
                titulo
                contenido
                imagen {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
        }
    }`

const Habitaciones = ({data: {allDatoCmsHabitacion: {nodes}}}) => { //632 () aprendimos destructuring por props

   const {titulo, contenido, imagen} = nodes[0];

  return (

    <Layout>
        <main
            css={css`//635
                margin: 0 auto;
                max-width: 1200px;
                width: 95%;
            `}
        >
            <h1
                css={css` //635
                    text-align: center;
                    margin-top: 4rem;
                `}
            >{titulo}</h1>
            <p>{contenido}</p>
            <GatsbyImage image={imagen.gatsbyImageData} alt="${titulo}"/>
        </main>
        

    </Layout>
  );
}

export default Habitaciones
