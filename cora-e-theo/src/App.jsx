import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './shared/providers/style';
import { Error, Home, Layout, SobreNos, Playlist } from "./routes";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sobre-nos" element={<SobreNos />} />
          <Route path="playlist" element={<Playlist />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
