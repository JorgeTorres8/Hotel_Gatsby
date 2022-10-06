import React from 'react'
import { css } from '@emotion/react' 
import styled from '@emotion/styled' 
import { Link } from 'gatsby' 

const EnlaceHome = styled(Link)` 
  color: #FFF;
  text-align: center;
  text-decoration: none;
`

const Nav = styled.nav` 
  display: flex;
  justify-content: center;
  padding-bottom: 3rem;
  @media(min-width: 768px) {
    padding-bottom: 0;
  }
`;

const NavLink = styled(Link)` 
  color: #FFFFFF;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1rem;
  font-family: 'PT Sans', sans-serif;
  text-decoration: none;
  padding: 1rem;
  margin-right: 1rem;

  &:last-of-type{
    margin-right: 0; 
  }
  &.pagina-actual {
    border-bottom: 2px solid #FFFFFF;
  }
`

const Footer = ({title}) => {  //636

  const year = new Date().getFullYear; 

  return (
    <>
        <footer
        css={css`
            background-color: rgba(44,62,80);
            margin-top: 5rem;
            padding: 1rem;
        `}
        >
            <div
                css={css`
                max-width: 1200px;
                margin: 0 auto;

                @media(min-width: 768px) {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                `}
            >

                <Nav> 
                <NavLink 
                    to={'/'}
                    activeClassName="pagina-actual" 
                >Inicio</NavLink>
                <NavLink 
                    to={'/nosotros'}
                    activeClassName="pagina-actual" 
                >Nosotros</NavLink>
                </Nav>

                <EnlaceHome
                >Hotel Gatsby</EnlaceHome>


            </div>
        </footer>
        <p
            css={css`
                text-align: center;
                color: #FFF;
                background-color: rgb(33,34,55);
                margin: 0;
                padding: 1rem;
            `}
        >
            {title}, Todos los derechos Reservados {year} &copy;
        </p>
    </>
  )
}

export default Footer
