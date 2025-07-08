import Typography from "@mui/material/Typography";
import { useAuth } from "../Context/AuthContext";
import Grid from "@mui/material/Grid";

const TenantLogin = ({ tenantUser }) => {
  const { tenantLogin } = useAuth();

  const loginToTenant = async (email, tenantId) => {
    await tenantLogin(email, tenantId);
  };

  return (
    <Grid container size={12}>
      <Grid size={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          style={{
            fontFamily: "monospace",
            fontWeight: "bold",
            color: "darkblue",
          }}
        >
          Available Tenants For You
        </Typography>
      </Grid>

      <Grid size={12} sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        {tenantUser.map((user, index) => {
          return (
            <Grid
              sx={{ backgroundColor: "darkblue", border: "3px solid black", width: "25vh", textAlign: "center", mb:2, cursor: "pointer" }}
              onClick={() => {
                loginToTenant(user.email, user.tenantId);
              }}
              key={index}
            >
              <p
                style={{
                  fontFamily: "monospace",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                {user.tenantId}
              </p>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default TenantLogin;
