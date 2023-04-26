import { Container, Button } from "@mui/material";
import Appbar from "./components/appbar";

function App() {
  return (
    <Container maxWidth="xl" sx={{ background: "#fcfcfc" }}>
      <Appbar />
    </Container>
  );
}

export default App;
