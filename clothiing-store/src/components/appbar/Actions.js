import { ListItemIcon, Typography, ListItemText } from "@mui/material";
import {
  ActionIconsContainerDesktop,
  ActionIconsContainerMobile,
  MyList,
  StyledBadge,
} from "../../style/appbar";
import PersonIcon from "@mui/icons-material/Person";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

const Actions = ({ matches }) => {
  const Component = matches
    ? ActionIconsContainerMobile
    : ActionIconsContainerDesktop;
  return (
    <Component>
      <MyList type="row">
        {/* <ListItemText>
          <Typography>My Jobs</Typography>
        </ListItemText>
       
        <ListItemText>
          <Typography>Post Jobs</Typography>
        </ListItemText> */}
        {/* <ListItemText>
          <Typography>Post Gigs</Typography>
        </ListItemText> */}
        <ListItemText>
          <Typography>About Us</Typography>
        </ListItemText>
        <ListItemText>
          <Typography>Hire Designers</Typography>
        </ListItemText>

        <ListItemIcon
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            gap: "2px",
          }}
        >
          {" "}
          <Link
            to={"/login"}
            style={{
              textDecoration: "none",
              display: "flex",
              color: "black",
    
            }}
          >
            {" "}
            <Typography>Join Us</Typography>
            <PersonIcon />{" "}
          </Link>
        </ListItemIcon>
        {/* 
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar
            alt="Bibek"
            src="https://images.pexels.com/photos/4052752/pexels-photo-4052752.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </StyledBadge> */}
      </MyList>
    </Component>
  );
};

export default Actions;
