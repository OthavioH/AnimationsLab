import styled from "styled-components";
import {
  AnimationList,
  FadeAnimation,
  SlideAnimation,
  TextAnimationItem,
  TextWrapper,
  TypingAnimation,
} from "../styles/TextAnimation.styles";

interface TextAnimationListProps {
  text: string;
}

export default function TextAnimationList({ text }: TextAnimationListProps) {
  return (
    <AnimationList>
      <TextAnimationItem>
        <FadeAnimation>{text}</FadeAnimation>
      </TextAnimationItem>
      <TextAnimationItem>
        <SlideAnimation>{text}</SlideAnimation>
      </TextAnimationItem>
      <TextAnimationItem>
        <TypingAnimation>
          <TextWrapper>{text}</TextWrapper>
        </TypingAnimation>
      </TextAnimationItem>
    </AnimationList>
  );
}
