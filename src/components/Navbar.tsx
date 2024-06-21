import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import {
  NavbarContainer,
  LinksContainer,
  NavLink,
} from "../styles/NavbarStyles";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar: React.FC = () => {
  const { theme } = useTheme();

  return (
    <NavbarContainer theme={theme}>
      <div>My Portfolio</div>
      <LinksContainer>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/projects">Projects</NavLink>
        <NavLink href="/admin">Admin</NavLink>
      </LinksContainer>
      <ThemeSwitcher />
    </NavbarContainer>
  );
};

export default Navbar;
