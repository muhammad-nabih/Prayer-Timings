//LOCAL COMPONENTS
import MainContent from "./MainContent";
import CardContent from "./CardContent";
import Selection from "./Selection";

//  MATERIAL-UI COMPONENTS
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import SalahProvider from "./ContextSalah/ContextSalahTimes";

const ContainerDiv = () => {
  return (
    <SalahProvider>
      <Container
        maxWidth="lg"
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <header>
          <MainContent />
        </header>

        <main>
          <CardContent />
          <Selection />
        </main>

        <Divider sx={{ borderColor: "#d2d2d2" }} />

        <footer>
          <p>Mohamed Nabih &copy; 2023 </p>
        </footer>
      </Container>
    </SalahProvider>
  );
};

export default ContainerDiv;
