import {
  Input,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../style/appbar";
import Actions from "./Actions";
import SearchIcon from "@mui/icons-material/Search";

const AppbarDesktop = ({ matches }) => {
  return (
    <AppbarContainer>
      <AppbarHeader>
        Clothing <span style={{ color: "#fa5221" }}>Store</span>
      </AppbarHeader>
      <MyList type="row">
        <ListItemIcon
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Input
            placeholder="Search Jobs near your location (city, state, postcode)"
            sx={{ width: "90%" }}
          />
          <SearchIcon />
        </ListItemIcon>
      </MyList>

      <Actions matches={matches} />
    </AppbarContainer>
  );
};

export default AppbarDesktop;
