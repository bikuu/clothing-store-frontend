import { Container } from "@mui/material";
import Appbar from "./components/appbar";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import AppDrawer from "./components/drawer";
import Home from "./pages/home";
import DetailPage from "./pages/jobs/gigs";
import { Login } from "./components/login";
import Register from "./components/register";
import { Route, Routes } from "react-router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import DataDetail from "./components/dataDetail";
import { getUser } from "./api";
import { setUser } from "./redux/slice/userSlice";

function App() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const dispatch = useDispatch();

  const [isLoadingData, setisLoadingData] = useState(true);
  let accessToken = localStorage.getItem("access_token");

  useEffect(() => {
    if (accessToken) {
      getUser().then((res) => {
        dispatch(setUser(res.data.data));
        setisLoadingData(false);
        console.log(res.data);
      });
    } else {
      setisLoadingData(false);
    }
  }, []);
  return (
    <Container maxWidth="xl" sx={{ background: "#fcfcfc" }}>
      <Appbar matches={matches} />
      <Routes>
        <Route path="/" element={<Home matches={matches} />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path="job">
          <Route index element={<Home />} />
          <Route path=":id" element={<DataDetail />} />
          <Route path=":id" element={<Upsert />} />
          <Route path="create" element={<Upsert />} />{" "}
        </Route>
        <Route path="workfolio">
          <Route index element={<Home />} />
          <Route path=":id" element={<DataDetail />} />
          <Route path=":id" element={<Upsert />} />
          <Route path="create" element={<Upsert />} />{" "}
        </Route>
        {/* <Route path="jobquotas">
          <Route index element={<Home />} />
          <Route path=":id" element={<DataDetail />} />
          <Route path=":id" element={<Upsert />} />
          <Route path="create" element={<Upsert />} />{" "}
        </Route> */}
      </Routes>
      {matches && <AppDrawer />}
    </Container>
  );
}

export default App;
