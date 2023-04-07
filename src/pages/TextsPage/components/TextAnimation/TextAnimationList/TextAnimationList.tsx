import styled from "styled-components";
import {
  AnimationList,
  FadeAnimation,
  TextAnimationItem,
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
        <p>{text}</p>
      </TextAnimationItem>
    </AnimationList>
  );
}
