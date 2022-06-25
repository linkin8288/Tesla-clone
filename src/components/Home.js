import React from 'react'
import styled from "styled-components"
import Section from './Section'
import Header from './Header'
import Footer from './Footer'
// Section repeat several times, so imports it

function Home() {
  return (
    <Container>
        <Header />
        <Section />
        <Footer />
        {/* <Section
            title="Model Y"
            description= "Order Online for Touchless Delivery"
            backgroundImg="model-y.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
        />
         <Section 
            title="Model S"
            description= "Order Online for Touchless Delivery"
            backgroundImg="model-s.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
        />
        <Section
            title="Model 3"
            description= "Order Online for Touchless Delivery"
            backgroundImg="model-3.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory" 
        />
        <Section
            title="Model X"
            description= "Order Online for Touchless Delivery"
            backgroundImg="model-x.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
         />
        <Section 
            title="Solar and Powerwall"
            description= "Power Everything"
            backgroundImg="solar-panel.jpg"
            leftBtnText="Order now"
            rightBtnText="Learn more"
        />
        <Section 
            title="Accessories"
            description= ""
            backgroundImg="accessories.jpg"
            leftBtnText="Shop now"
            /> */}
    </Container>
  )
}

const Container = styled.div`
    height: 100vh;
`

export default Home