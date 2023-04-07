import styled from "styled-components";
import Campaign from "@mui/icons-material/Campaign";

export const TextPageMain = styled.main`
  width: 100%;
  height: fit-content;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const PageTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  background-color: white;
  padding: 10px;
  border-radius: 10px;

  box-shadow: 0px 2px 4px 0.5px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const Icon = styled(Campaign)`
  margin-right: 10px;
  color: red;
`;
