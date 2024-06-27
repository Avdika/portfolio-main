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
        <NavLink href="/js-projects">JS Projects</NavLink>
        {/* <NavLink href="/cs-projects">C# Projects</NavLink> For later use. to do: Uncomment when ready */}
        {/* <NavLink href="/admin">Admin</NavLink> For later use. to do: Uncomment when work on it will start */}
      </LinksContainer>
      <ThemeSwitcher />
    </NavbarContainer>
  );
};

export default Navbar;
