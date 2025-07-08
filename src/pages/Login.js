import { useState } from "react";
import InitialLogin from "../components/InitalLogin";
import TenantLogin from "../components/TenantLogin";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Login = () => {
  const [inital, setInital] = useState(false);
  const [tenantUsers, setTenantUser] = useState([]);

  return (
    <Grid container size={12}>
      <Grid size={12} sx={{display: "flex", justifyContent: "center"}}>
        <Typography variant="h4" style={{fontFamily: "monospace"}}>Clinic Hub</Typography>
      </Grid>

      <Grid size={12}> 
        {!inital ? (
          <Grid size={12}>
            <InitialLogin
              onCheck={(check) => {
                check ? setInital(true) : setInital(false);
              }}
              onChangeTenantList={(tenantUsers) => {
                setTenantUser(tenantUsers);
              }}
            />
          </Grid>
        ) : (
          <Grid size={12}>
            <TenantLogin tenantUser={tenantUsers} />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default Login;
