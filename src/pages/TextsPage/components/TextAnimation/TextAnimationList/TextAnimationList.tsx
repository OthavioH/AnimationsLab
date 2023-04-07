import {
  AnimationList,
  FadeAnimation,
  SlideAnimation,
  TextAnimationItem,
  TextShadowAnimation,
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
      <TextAnimationItem>
        <TextShadowAnimation>{text}</TextShadowAnimation>
      </TextAnimationItem>
    </AnimationList>
  );
}
