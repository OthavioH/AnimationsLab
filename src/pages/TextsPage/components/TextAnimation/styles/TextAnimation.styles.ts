import styled, { keyframes } from "styled-components";

const noShadowAnimation = keyframes`
    0% {
        box-shadow: 0px 2px 4px 0.5px rgba(0, 0, 0, 0.5);
    }
    100% {
        box-shadow: none;
    }
`;

export const TextAnimationItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 300px;
  height: 100px;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  word-break: break-all;

  font-size: 30px;
  font-weight: bold;

  background-color: white;
  border: 1px solid #cccccc;
  border-radius: 10px;
  box-shadow: 0px 2px 4px 0.5px rgba(0, 0, 0, 0.5);

  &:hover {
    animation-name: ${noShadowAnimation};
    animation-duration: 300ms;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;

    /* animation: ${noShadowAnimation} 300ms ease-in-out forwards; */
  }
`;

export const AnimationList = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Animation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
`;

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

export const FadeAnimation = styled(Animation)`
  animation-name: ${fadeIn};
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  /* animation: ${fadeIn} 1.5s ease-in-out; */

  :hover {
    animation-name: ${fadeOut};
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    /* animation: ${fadeOut} 1.5s ease-in-out; */
  }
`;

const slideInAnimation = keyframes`
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    }
`;

const slideOutAnimation = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(100%);
    }
`;

export const SlideAnimation = styled(Animation)`
  animation-name: ${slideInAnimation};
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  /* animation: ${slideInAnimation} 1.5s ease-in-out; */

  :hover {
    animation-name: ${slideOutAnimation};
    animation-duration: 1.5s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    /* animation: ${slideOutAnimation} 1.5s ease-in-out; */
  }
`;

const typingAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const blinkAnimation = keyframes`
  from, to {border-color: transparent}
  50% {border-color: #000}
`;

export const TextWrapper = styled.div`
  width: fit-content;
  justify-content: flex-start; // set the text and cursor effect to start
  max-width: fit-content; // width will grow and finish where the text ends
  text-align: start; // set the text to start
  border-right: 0.15em solid transparent; // set the cursor effect
  height: fit-content; // height needs to be the same of the text
  margin: 0 auto; // center the text
  letter-spacing: 2px;
`;

export const TypingAnimation = styled(Animation)`
  &:hover ${TextWrapper} {
    overflow: hidden; // hide the text that is not visible

    animation-name: ${typingAnimation}, ${blinkAnimation};
    animation-duration: 3.5s, 0.75s;
    animation-timing-function: steps(20, end), step-end;
    animation-iteration-count: 1, infinite;
    /* animation: ${typingAnimation} 3.5s steps(20, end),
      ${blinkAnimation} 0.75s step-end infinite; */
  }
`;

const textShadowPulseAnimation = keyframes`
    0% {
    text-shadow: 0 0 0 rgba(0, 0, 0, 0.6);
  }
  50% {
    text-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
  }
  100% {
    text-shadow: 0 0 0 rgba(0, 0, 0, 0.6);  
  }
`;

export const TextShadowAnimation = styled(Animation)`
  animation-name: ${textShadowPulseAnimation};
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  /* animation: ${textShadowPulseAnimation} 2s ease-in-out infinite; */
`;

const changeColorAnimation = keyframes`
    0% {
        background-image: linear-gradient(to right, purple, blue, green, yellow, orange, red);
    }
    20% {
        background-image: linear-gradient(to right, blue, green, yellow, orange, red, purple);
    }
    40% {
        background-image: linear-gradient(to right, green, yellow, orange, red, purple, blue);
    }
    60% {
        background-image: linear-gradient(to right, yellow, orange, red, purple, blue, green); 
    }
    80% {
        background-image: linear-gradient(to right, orange, red, purple, blue, green, yellow);
    }
    100% {
        background-image: linear-gradient(to right, red, purple, blue, green, yellow, orange); 
    }
`;

export const ChangeColorAnimation = styled(Animation)`
  animation-name: ${changeColorAnimation};
  animation-duration: 300ms;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  /* animation: ${changeColorAnimation} 2s ease-in-out infinite; */

  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const flashColorsAnimation = keyframes`
    0% {
        background-image: linear-gradient(to right, red, red, orange, #fa9069);
    }
    25% {
        background-image: linear-gradient(to right, red, orange, #fa9069, red); 
    }
    50% {
        background-image: linear-gradient(to right, orange, #fa9069, red, red);
    }
    75% {
        background-image: linear-gradient(to right, #fa9069, red, red, orange);
    }
    100% {
        background-image: linear-gradient(to right, red, red, orange, #fa9069);
    }
`;

export const FlashColorsAnimation = styled(Animation)`
  animation-name: ${flashColorsAnimation};
  animation-duration: 300ms;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  /* animation: ${flashColorsAnimation} 1s ease-in-out infinite; */

  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const lineThroughAnimation = keyframes`
    0% {
      text-decoration: underline;
    }
    50%{
      text-decoration: line-through;
    }
    100% {
      text-decoration: overline;
    }
`;

export const LineThroughAnimation = styled(Animation)`
  animation-name: ${lineThroughAnimation};
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  /* animation: ${lineThroughAnimation} 1s ease-in-out infinite; */
`;

export const DashedLineThroughAnimation = styled(Animation)`
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: black;
    border-radius: 1em;
    transform: scaleX(0);
    transform-origin: left;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    color: gray; /* Change the text color on hover */
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;
