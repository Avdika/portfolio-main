import React from "react";

const ThemeSwitcher: React.FC = () => {
  const setTheme = (theme: string) => {
    document.documentElement.setAttribute("data-theme", theme);
  };

  return (
    <div>
      <button onClick={() => setTheme("blue")}>Blue Theme</button>
      <button onClick={() => setTheme("green")}>Green Theme</button>
      <button onClick={() => setTheme("dark")}>Dark Theme</button>
      <button onClick={() => setTheme("colorblind")}>Color-Blind Theme</button>
    </div>
  );
};

export default ThemeSwitcher;
