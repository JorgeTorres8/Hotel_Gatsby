//631 este archivo permite crear páginas con programación
exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultado = await graphql(`
    query {
      allDatoCmsHabitacion{
        nodes {
          slug
        }
      }
    }
  `);

  //console.log(resultado.data.allDatoCmsHabitacion.nodes);
  
  if(resultado.errors) {
    reporter.panic('No hubo Resultados', resultado.errors);
  }

  //Si hay paginas. crear los archivos

  const habitaciones = resultado.data.allDatoCmsHabitacion.nodes;
  
  console.log(habitaciones);

  habitaciones.forEach(habitacion => { //632
    actions.createPage({
      path: habitacion.slug,
      component: require.resolve('./src/components/Habitaciones.js'),//Que componente va a cargar
      context: {//Para pasar el slug dinamicamente a todas las paginas que se van a crear de esta forma
        slug: habitacion.slug //sera como una variable que se le pasara a Habitaciones.js
        /*AUTOMATICAMENTE CREARA LOS SLUG(HAB) EN PUBLIC/PAGE-DATA */
      }
    })
  });

  /*const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })*/
}
