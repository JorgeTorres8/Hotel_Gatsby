import { graphql, useStaticQuery } from "gatsby";

const useHabitaciones = () => { //627

  const data = useStaticQuery(graphql`
    query {
        allDatoCmsHabitacion{
            nodes {
                titulo
                id
                slug
                contenido
                imagen {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
        }
}`)
    return data.allDatoCmsHabitacion.nodes.map(habitacion => ({ //628
        titulo: habitacion.titulo,
        id: habitacion.id,
        contenido: habitacion.contenido,
        imagen: habitacion.imagen,
        slug: habitacion.slug,
    }))
}

export default useHabitaciones
