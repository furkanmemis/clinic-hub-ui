import MenuSidebar from "../Menu/MenuSidebar";
import Grid from "@mui/material/Grid";

const HomeManagement = () => {
  return (
    <Grid
      container
      size={12}
      sx={{ display: "flex", justifyContent: "space-between" }}
    >
      <Grid size={1}>
        <MenuSidebar/>
      </Grid>
      <Grid size={11} sx={{padding: 2}}>
        home page içerik
      </Grid>
    </Grid>
  );
};

export default HomeManagement;
