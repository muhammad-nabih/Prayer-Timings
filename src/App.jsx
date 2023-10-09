import "./App.css";
import MainContent from "./components/MainContent";
import CardContent from "./components/CardContent";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// MATERIAL-UI COMPONENTS
import Container from "@mui/material/Container";

const theme = createTheme({
  typography: {
    fontFamily: "alex",
  },
});
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Container maxWidth="lg">
          <header>
            <MainContent />
          </header>
          <main>
            <CardContent />
          </main>
          <footer></footer>
        </Container>
      </div>{" "}
    </ThemeProvider>
  );
};

export default App;
