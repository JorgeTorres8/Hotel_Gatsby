import React from 'react'
import { css } from '@emotion/react' //611
import styled from '@emotion/styled' //613
import { Link } from 'gatsby' //612

const EnlaceHome = styled(Link)` //635
  color: #FFF;
  text-align: center;
  text-decoration: none;
`

const Nav = styled.nav` //613
  display: flex;
  justify-content: center;
  padding-bottom: 3rem;
  @media(min-width: 768px) {
    padding-bottom: 0;
  }
`;

const NavLink = styled(Link)` //613
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

const Header = () => { //608
  return (
    <header
      css={css`
          background-color: rgba(44,62,80);
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
        <EnlaceHome
        >Hotel Gatsby</EnlaceHome>

        <Nav> {/*612*/}
          <NavLink 
            to={'/'}
            activeClassName="pagina-actual" //613
          >Inicio</NavLink>
          <NavLink 
            to={'/nosotros'}
            activeClassName="pagina-actual" //613
          >Nosotros</NavLink>
        </Nav>

      </div>
    </header>
  )
}

export default Header
