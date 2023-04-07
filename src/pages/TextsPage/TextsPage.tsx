import { useState } from "react";
import { TextPageMain } from "./styles/textPage.styles";
import TextInput from "../../components/form/TextInput/TextInput";
import TextAnimationList from "./components/TextAnimation/TextAnimationList/TextAnimationList";

export default function TextsPage() {
  const [text, setText] = useState<string>("Text");

  return (
    <TextPageMain>
      <TextInput setText={setText} text={text} />
      <TextAnimationList text={text} />
    </TextPageMain>
  );
}
