import { AppBar, Grid, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface HeaderProps { }

const Header = () => {
  return (
    <>
      <Grid container spacing={1}>
        <AppBar color="primary">
          <Toolbar>
            <IconButton>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Grid>
    </>
  );
};

export default Header;
