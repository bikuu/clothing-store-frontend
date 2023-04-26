import { ListItemButton, ListItemIcon } from "@mui/material";
import { MyList } from "../../style/appbar/style";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";

const Actions = () => {
  return (
    <MyList type="row">
      <ListItemButton
        sx={{
          justifyContent: "end",
        }}
      >
        <ListItemIcon
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <SearchIcon />
        </ListItemIcon>
      </ListItemButton>
      <ListItemButton
        sx={{
          justifyContent: "end",
        }}
      >
        <ListItemIcon
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <PersonIcon />
        </ListItemIcon>
      </ListItemButton>
    </MyList>
  );
};

export default Actions;
