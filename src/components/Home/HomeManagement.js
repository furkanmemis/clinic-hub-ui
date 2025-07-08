import MenuSidebar from "../Menu/MenuSidebar";
import Grid from "@mui/material/Grid";

const HomeManagement = () => {
  return (
    <Grid
      container
      size={12}
      sx={{ display: "flex", justifyContent: "space-between" }}
      spacing={2}
    >
      <Grid size={1}>
        <MenuSidebar/>
      </Grid>
      <Grid size={11}>
        home page içerik
      </Grid>
    </Grid>
  );
};

export default HomeManagement;
