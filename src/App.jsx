import "./App.css";
//LOCAL COMPONENTS
import MainContent from "./components/MainContent";
import CardContent from "./components/CardContent";
import Selection from "./components/Selection";
// MATERIAL-UI COMPONENTS
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";

const theme = createTheme({
  typography: {
    fontFamily: "alex",
  },
});
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Container maxWidth="lg"  sx={{display: "flex",flexDirection: "column"}}>
          
          <header>
            <MainContent />
    
          </header>

          <main>
            <CardContent />
            <Selection />
          </main>

          <Divider sx={{borderColor:"#d2d2d2"}} />

          <footer>
            <p>Mohamed Nabih &copy; 2023 </p>
          </footer>

        </Container>
      </div>{" "}
    </ThemeProvider>
  );
};

export default App;
