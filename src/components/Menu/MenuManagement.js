import MenuSidebar from "./MenuSidebar";
import Grid from "@mui/material/Grid";

const MenuManagement = () => {
  return (
    <Grid size={12} container>
      <Grid size={1}>
        <MenuSidebar />
      </Grid>
      <Grid size={11} sx={{ padding: 2 }}>
        menu page
      </Grid>
    </Grid>
  );
};

export default MenuManagement;
