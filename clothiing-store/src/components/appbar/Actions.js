import { ListItemIcon, Input } from "@mui/material";
import {
  ActionIconsContainerDesktop,
  ActionIconsContainerMobile,
  MyList,
} from "../../style/appbar";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";

const Actions = ({ matches }) => {
  const Component = matches
    ? ActionIconsContainerMobile
    : ActionIconsContainerDesktop;
  return (
    <Component>
      <MyList type="row" sx={{ display: matches ? "none" : "flex" }}>
        <ListItemIcon
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Input
            placeholder="Search Designers(city, state, postcode)"
            sx={{ width: "290px" }}
          />
          <SearchIcon />
        </ListItemIcon>

        <ListItemIcon
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            gap: "2px",
          }}
        >
          <span>Join Us</span>
          <PersonIcon />
        </ListItemIcon>
      </MyList>
    </Component>
  );
};

export default Actions;
