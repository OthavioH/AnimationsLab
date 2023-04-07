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

export const FadeAnimation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;

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

export const SlideAnimation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;

  animation-name: ${slideInAnimation};
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  /* animation: ${slideInAnimation} 1.5s ease-in-out; */

  :hover {
    animation-name: ${slideOutAnimation};
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    /* animation: ${slideOutAnimation} 1.5s ease-in-out; */
  }
`;
