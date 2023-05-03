import { AppbarContainer, AppbarHeader } from "../../style/appbar";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import Actions from "./Actions";
import { IconButton } from "@mui/material";

const AppbarMobile = ({ matches }) => {
  
  return (
    <AppbarContainer>
      <IconButton >
        <MenuIcon />
      </IconButton>
      <AppbarHeader textAlign={"center"} variant="h4">
        Clothing <span style={{ color: "#fa5221" }}>Store</span>
      </AppbarHeader>
      <IconButton>
        <SearchIcon />
      </IconButton>
      <Actions matches={matches} />
    </AppbarContainer>
  );
};

export default AppbarMobile;
