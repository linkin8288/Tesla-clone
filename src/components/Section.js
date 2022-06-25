import React from 'react'
import styled from "styled-components"
// Fade Animation using react-reveal
import Fade from 'react-reveal/Fade'
import './Section.css'

// Background Image
// Title
// Button groups

// function Section({title, description, backgroundImg, leftBtnText, rightBtnText}) {
//   return (
//     // Passing props to style components
//     <Wrap bgImage={backgroundImg} className="wrapimg">
//         <Fade bottom>
//             <ItemText>
//                 <h1>{title}</h1>
//                 <p>{description}</p>
//             </ItemText>
//         </Fade>
//         <Buttons>
//         <Fade bottom>
//             <ButtonGroup>
//                 <LeftButton>
//                     {leftBtnText}
//                 </LeftButton>
//                 { rightBtnText && 
//                     <RightButton>
//                         {rightBtnText}
//                     </RightButton>
//                 }
//             </ButtonGroup>
//         </Fade>
//             <DownArrow className='arrow'/>
//         </Buttons>
//     </Wrap>
//   )
// }

function Section() {
    return (
        <>
            <Wrap className="wrapimg-1">
                <Fade bottom>
                    <ItemText>
                        <h1>Model Y</h1>
                        <p>Order Online for Touchless Delivery</p>
                    </ItemText>
                </Fade>
                <Buttons>
                    <ButtonGroup>
                        <LeftButton>
                            Custom Order
                        </LeftButton>
                        <RightButton>
                            Learn More
                        </RightButton>
                    </ButtonGroup>
                </Buttons>
            </Wrap>
            <Wrap className="wrapimg-2">
                <Fade bottom>
                    <ItemText>
                        <h1>Model S</h1>
                        <p>Order Online for Touchless Delivery</p>
                    </ItemText>
                </Fade>
                <Buttons>
                    <ButtonGroup>
                        <LeftButton>
                           Custom Order
                        </LeftButton>
                        <RightButton>
                            Learn More
                        </RightButton>
                    </ButtonGroup>
                </Buttons>
            </Wrap>
            <Wrap className="wrapimg-3">
                <Fade bottom>
                    <ItemText>
                        <h1>Model 3</h1>
                        <p>Order Online for Touchless Delivery</p>
                    </ItemText>
                </Fade>
                <Buttons>
                    <ButtonGroup>
                        <LeftButton>
                            Custom Order
                        </LeftButton>
                        <RightButton>
                            Learn More
                        </RightButton>
                    </ButtonGroup>
                </Buttons>
            </Wrap>
            <Wrap className="wrapimg-4">
                <Fade bottom>
                    <ItemText>
                        <h1>Model X</h1>
                        <p>Order Online for Touchless Delivery</p>
                    </ItemText>
                </Fade>
                <Buttons>
                    <ButtonGroup>
                        <LeftButton>
                            Custom Order
                        </LeftButton>
                        <RightButton>
                            Learn More
                        </RightButton>
                    </ButtonGroup>
                </Buttons>
            </Wrap>
            <Wrap className="wrapimg-5">
                <Fade bottom>
                    <ItemText>
                        <h1>Solar and Powerwall</h1>
                        <p>Power Everything</p>
                    </ItemText>
                </Fade>
                <Buttons>
                    <ButtonGroup>
                        <LeftButton>
                            Learn More
                        </LeftButton>
                        {/* <RightButton>
                            Learn more
                        </RightButton> */}
                    </ButtonGroup>
                </Buttons>
            </Wrap>
        </>
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
    margin-bottom: 100px;
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
    font-weight: 600;
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