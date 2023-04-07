import { useState } from "react";
import { Icon, PageTitle, TextPageMain } from "./styles/textPage.styles";
import TextInput from "../../components/form/TextInput/TextInput";
import TextAnimationList from "./components/TextAnimation/TextAnimationList/TextAnimationList";

export default function TextsPage() {
  const [text, setText] = useState<string>("Cool animations");

  return (
    <TextPageMain>
      <PageTitle>
        <Icon fontSize="medium" />
        Hover over cards to activate animations
      </PageTitle>
      <TextInput setText={setText} text={text} />
      <TextAnimationList text={text} />
    </TextPageMain>
  );
}
