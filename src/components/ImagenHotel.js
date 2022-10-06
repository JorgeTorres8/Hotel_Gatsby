import React from 'react'
import { graphql, useStaticQuery } from 'gatsby' //615 Nos permitirán hacer consulta a la API con GraphQL
import BackgroundImage from 'gatsby-background-image'; //616
import styled from '@emotion/styled'; //616

const ImageBackground = styled(BackgroundImage)`
    height: 700px;
`;

const TextoImagen = styled.div` //617
    background-image: linear-gradient(to top, rgba(34,49,63,.8), rgba(34,49,63.8));
    color: #FFF;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1; //para que crezca
    align-items: center;
    justify-content: center;

    h1{
        font-size: 4rem;
        margin: 0%;
        @media(min-width: 992px) {
            font-size: 5.8rem;
        }
    }
    p {
        font-size: 2rem;
        @media(min-width: 992px) {
            font-size: 2.6rem;
        }
    }
`


const ImagenHotel = () => { //615

  const {image} = useStaticQuery(graphql`
    query {
        image: file(relativePath: {eq:"8.jpg"}) {
            sharp:childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
  `);
 //console.log(image.sharp.fluid);
  return (
    <ImageBackground //616 nos ayudamos de la documentacion
        tag="section"
        fluid={image.sharp.fluid}
        fadeIn="soft"
    >
        <TextoImagen>
            <h1>Bienvenido al Hotel Gatsby</h1>
            <p>El mejor Hotel para tus vacaciones</p>
        </TextoImagen>
    </ImageBackground>
  )
}

export default ImagenHotel
