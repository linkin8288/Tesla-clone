import React from 'react'
import styled from "styled-components"
import Section from './Section'
// Section repeat several times, so imports it

function Home() {
  return (
    <Container>
        <Section />
    </Container>
  )
}

const Container = styled.div`
    height: 100vh;

`

export default Home