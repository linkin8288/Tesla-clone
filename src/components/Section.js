import React from 'react'
import styled from "styled-components"
// Fade Animation using react-reveal
import Fade from 'react-reveal/Fade'
import './Section.css'

// Background Image
// Title
// Button groups

function Section({title, description, backgroundImg, leftBtnText, rightBtnText}) {
  return (
    // Passing props to style components
    <Wrap bgImage={backgroundImg} className="wrapimg">
        <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
        </Fade>
        <Buttons>
        <Fade bottom>
            <ButtonGroup>
                <LeftButton>
                    {leftBtnText}
                </LeftButton>
                { rightBtnText && 
                    <RightButton>
                        {rightBtnText}
                    </RightButton>
                }
            </ButtonGroup>
        </Fade>
            <DownArrow className='arrow'/>
        </Buttons>
    </Wrap>
  )
}

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    /* background-image: url('/images/model-x.jpg'); */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between; // vertical
    align-items: center; // horizontal
    /* background-image: ${props => `url("/images/${props.bgImage}")`} */

`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    
`

const Buttons = styled.div`

`
// Apply small screen, column buttons diplay
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`
const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;

`   
// RightButton inherit LeftButton
const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
`
// index css - overflow hidden and animation
// hidden: It is used to clip the content and no scrolling mechanism is provided.
const DownArrow = styled.img`
    height: 40px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
`


export default Section