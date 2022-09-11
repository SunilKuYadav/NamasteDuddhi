import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";

import { useAppSelector } from "../_app";
import App from "../App";

const Navigation = () => {
  const theme = useAppSelector((state) => state.theme);

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </ThemeProvider>
  );
};

export default Navigation;
