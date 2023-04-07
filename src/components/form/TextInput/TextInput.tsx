import styled from "styled-components";

interface TextInputProps {
  text: string;
  setText: (text: string) => void;
}

export default function TextInput({ text, setText }: TextInputProps) {
  return (
    <Input
      value={text}
      onChange={(e) => {
        setText(e.target.value);
      }}
    ></Input>
  );
}

const Input = styled.input`
  width: 100%;
  max-width: 600px;
  height: 50px;
  border: 2px solid #cccccc;
  border-radius: 5px;
  padding: 0 10px;

  color: gray;
  font-size: 16px;
  text-align: center;
`;
