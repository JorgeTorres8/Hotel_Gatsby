import * as React from "react"
import { css } from '@emotion/react' //628
import styled from "@emotion/styled" //630
import Layout from "../components/Layout"
import ImagenHotel from "../components/ImagenHotel" //615
import ContenidoInicio from "../components/ContenidoInicio" //621
import useHabitaciones from "../hook/useHabitaciones" //627
import HabitacionPreview from "../components/HabitacionPreview" //628

const ListadoHabitaciones = styled.ul` //630
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;

  @media(min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`

const IndexPage = () => {

  const habitaciones = useHabitaciones(); //627

  return (
    <Layout>
      <ImagenHotel/>
      <ContenidoInicio /*621*/  />

      <h2 
        css={css` //628
          margin-top: 5rem;
          text-align: center;
          font-size: 3rem;
        `}
      >Nuestras Habitaciones</h2>

      <ListadoHabitaciones>
        {habitaciones.map(habitacion => (
          <HabitacionPreview
            key={habitacion.id}
            habitacion={habitacion}
          />
        ))}
      </ListadoHabitaciones>

    </Layout>
  
  )
  
}

export default IndexPage
