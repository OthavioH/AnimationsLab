import { useLocation } from "react-router-dom";
import NavItem from "../NavItem/NavItem";
import { NavMain, NavWrapper } from "./nav.styles";

export default function Nav() {
  const path = useLocation().pathname;

  return (
    <NavMain>
      <NavWrapper>
        <NavItem isActive={path === "/"}>Texts</NavItem>
        <NavItem isActive={path === "/buttons"}>Buttons</NavItem>
      </NavWrapper>
    </NavMain>
  );
}
