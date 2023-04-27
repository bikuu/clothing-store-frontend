import { Container } from "@mui/material";
import Appbar from "./components/appbar";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Banner from "./components/banner";
import Promotions from "./components/promotionSlider";
function App() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container maxWidth="xl" sx={{ background: "#fcfcfc" }}>
      <Appbar matches={matches} />
      <Banner />
      <Promotions />
    </Container>
  );
}

export default App;
