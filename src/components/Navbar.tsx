import React from "react";
import {
  NavbarContainer,
  NavTitle,
  NavLink,
  NavLinks,
} from "../styles/NavbarStyles";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavTitle>My Portfolio</NavTitle>
      <NavLinks>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#contact">Contact</NavLink>
        <ThemeSwitcher />
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
