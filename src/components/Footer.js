import React from 'react'
import styled from "styled-components";

function Footer() {
  return (
    <Container>
        <Menu>
          <p><a href="#">Tesla Clone © 2022</a></p>
          <p><a href="#">Privacy & Legal</a></p>
          <p><a href="#">Contact</a></p>
          <p><a href="#">Careers</a></p>
          <p><a href="#">News</a></p>
          <p><a href="#">Locations</a></p>
        </Menu>
    </Container>
  )
}

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
`
const Menu = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;
    font-size: 12px;
    font-weight: 60;

    a {
      color: white;
      padding: 0 10px;
      flex-wrap: nowrap;
    }

    @media(max-width: 768px) {
        display: none;
      }
`

export default Footer