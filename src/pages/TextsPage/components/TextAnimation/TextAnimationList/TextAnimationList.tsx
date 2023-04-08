import {
  AnimationList,
  ChangeColorAnimation,
  DashedLineThroughAnimation,
  FadeAnimation,
  FlashColorsAnimation,
  LineThroughAnimation,
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
      <TextAnimationItem>
        <ChangeColorAnimation>{text}</ChangeColorAnimation>
      </TextAnimationItem>
      <TextAnimationItem>
        <FlashColorsAnimation>The flash</FlashColorsAnimation>
      </TextAnimationItem>
      <TextAnimationItem>
        <LineThroughAnimation>{text}</LineThroughAnimation>
      </TextAnimationItem>
      <TextAnimationItem>
        <DashedLineThroughAnimation>{text}</DashedLineThroughAnimation>
      </TextAnimationItem>
    </AnimationList>
  );
}
