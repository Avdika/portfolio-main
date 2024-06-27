import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import AdminPanel from "./pages/AdminPanel"; // For later use. to do: Uncomment when main project finished
import Home from "./pages/Home";
import JSProjects from "./pages/JSProjects";
// import CSProjects from "./pages/CSProjects"; // For later use. to do: Uncomment when some projects ready
import Navbar from "./components/Navbar";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import GlobalStyle from "./styles/GlobalStyles";

const AppContent: React.FC = () => {
  const { theme } = useTheme();

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/js-projects" element={<JSProjects />} />
          {/* <Route path="/cs-projects" element={<CSProjects />} /> For later use. to do: Uncomment when ready */}
          {/* <Route path="/admin" element={<AdminPanel />} /> */}
        </Routes>
      </Router>
    </StyledThemeProvider>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
