import { Container } from "@mui/material";
import Appbar from "./components/appbar";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import Footer from "./components/footer";
import AppDrawer from "./components/drawer";
import Home from "./pages/home";
import DetailPage from "./pages/jobs/gigs";
import { Login } from "./components/login";
import Register from "./components/register";

function App() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container maxWidth="xl" sx={{ background: "#fcfcfc" }}>
      <Appbar matches={matches} />
      {/* <Home matches={matches} />
      <DetailPage /> */}

      <Login />
      {/* <Register /> */}
      {/* <Footer matches={matches} /> */}
      {matches && <AppDrawer />}
    </Container>
  );
}

export default App;
