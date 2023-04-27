import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../style/appbar";
import Actions from "./Actions";

const AppbarDesktop = ({ matches }) => {
  return (
    <AppbarContainer>
      <AppbarHeader>
        Clothing <span style={{ color: "#fa5221" }}>Store</span>
      </AppbarHeader>
      <MyList type="row">
        {/* <ListItemText primary="Help" /> */}
        <ListItemText primary="About Us" />
        <ListItemText primary="Hire Designers" />
      </MyList>
      <Actions matches={matches} />
    </AppbarContainer>
  );
};

export default AppbarDesktop;
