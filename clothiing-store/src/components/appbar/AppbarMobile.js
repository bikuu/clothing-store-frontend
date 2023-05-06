import { AppbarContainer, AppbarHeader } from "../../style/appbar";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import Actions from "./Actions";
import { IconButton, Input } from "@mui/material";

import { useDispatch } from "react-redux";
import { setDrawer } from "../../redux/slice/drawerSlice";
import { useState } from "react";
import { Link } from "react-router-dom";

const AppbarMobile = ({ matches }) => {
  const dispatch = useDispatch();
  const [searchOpen, setSearchOpen] = useState(false);
  const handleSetData = () => {
    dispatch(setDrawer(true));
    console.log("click");
  };

  return (
    <AppbarContainer>
      <IconButton onClick={handleSetData}>
        <MenuIcon />
      </IconButton>
      {!searchOpen ? (
        <AppbarHeader textAlign={"center"} variant="h4">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            Clothing <span style={{ color: "#fa5221" }}>Store</span>
          </Link>{" "}
        </AppbarHeader>
      ) : (
        <Input
          placeholder="Search Jobs near your location (city, state, postcode)"
          sx={{ width: "90%" }}
        />
      )}

      <IconButton onClick={() => setSearchOpen((prev) => !prev)}>
        <SearchIcon />
      </IconButton>
      <Actions matches={matches} />
    </AppbarContainer>
  );
};

export default AppbarMobile;
