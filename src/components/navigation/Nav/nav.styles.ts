import styled from "styled-components";

export const NavMain = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 60px;
  background-color: #fff;

  box-shadow: 0px -1px 8px black;

  z-index: 999;
`;

export const NavWrapper = styled.ul`
  width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;
