import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import {
  AppbarContainer,
  AppbarHeader,
  MyList,
} from "../../style/appbar/style";
import Actions from "./Actions";


const AppbarDesktop = ({ matches }) => {
  return (
    <AppbarContainer>
      <AppbarHeader>Clothing Store</AppbarHeader>
      <MyList type="row">
        {/* <ListItemText primary="Help" /> */}
        <ListItemText primary="Why Us" />
        <ListItemText primary="Find/Hire" />
        <ListItemText primary="Signup" />
        <ListItemText primary="" />
      </MyList>
      <Actions matches={matches} />
    </AppbarContainer>
  );
};

export default AppbarDesktop;
