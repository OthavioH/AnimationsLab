import { Link } from "react-router-dom";
import styled from "styled-components";

interface NavItemProps {
  children: React.ReactNode;
  isActive: boolean;

  [key: string]: any;
}

export default function NavItem({
  children,
  isActive,
  ...props
}: NavItemProps) {
  return (
    <Item className={isActive ? "active" : "not-active"}>
      <ItemLink to="/">{children}</ItemLink>
    </Item>
  );
}

const ItemLink = styled(Link)`
  text-decoration: none;
  color: #000000;

  font-size: 22px;
  font-weight: bold;
`;

const Item = styled.li`
  height: 100%;
  min-width: 120px;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  cursor: pointer;

  &.active {
    border-bottom: 2px solid #cccccc;
    cursor: default;
  }

  &.active ${ItemLink} {
    cursor: default;
  }

  :hover {
    border-bottom: 2px solid #cccccc;
  }
`;
