import Grid from "@mui/material/Grid"
import MenuSidebar from "../Menu/MenuSidebar"
const SettingsManagement = () => {
    return(

        <Grid container size={12}>

            <Grid size={1}>
                <MenuSidebar />

            </Grid>
            <Grid size={11} sx={{padding: 2}}>

                settings page

            </Grid>

        </Grid>

    )
};

export default SettingsManagement;