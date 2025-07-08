import MenuSidebar from "../Menu/MenuSidebar";
import Grid from "@mui/material/Grid";

const UserManagement = () => {
  return (
    <Grid size={12} container>
      <Grid size={1}>
        <MenuSidebar />
      </Grid>
      <Grid size={11} sx={{ padding: 2 }}>
        user page
      </Grid>
    </Grid>
  );
};

export default UserManagement;
