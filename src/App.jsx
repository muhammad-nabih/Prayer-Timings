import "./App.css";
import Container from "./components/ContainerDiv";
// MATERIAL-UI COMPONENTS
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "alex",
  },
});
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container />
    </ThemeProvider>
  );
};

export default App;
