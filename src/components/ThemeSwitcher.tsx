import React from "react";
import {
  ThemeSwitcherContainer,
  ThemeButton,
} from "../styles/ThemeSwitcherStyles";
import { themes } from "../themes";
import { useTheme } from "../contexts/ThemeContext";

const ThemeSwitcher: React.FC = () => {
  const { setTheme } = useTheme();

  return (
    <ThemeSwitcherContainer>
      <span style={{ color: "white", marginRight: "0.5rem" }}>Theme:</span>
      <ThemeButton
        color={themes.blue.background}
        onClick={() => setTheme(themes.blue)}
      />
      <ThemeButton
        color={themes.green.background}
        onClick={() => setTheme(themes.green)}
      />
      <ThemeButton
        color={themes.dark.background}
        onClick={() => setTheme(themes.dark)}
      />
      <ThemeButton
        color={themes.colorBlind.background}
        onClick={() => setTheme(themes.colorBlind)}
      >
        <i className="icon-eye" /> {/* Placeholder for color-blind icon */}
      </ThemeButton>
    </ThemeSwitcherContainer>
  );
};

export default ThemeSwitcher;
