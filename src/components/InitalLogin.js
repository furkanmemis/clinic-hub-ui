import { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const InitialLogin = ({ onCheck, onChangeTenantList }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const loginSystem = async () => {
    const tenantUsers = await login(email, password);
    onCheck(true);
    onChangeTenantList(tenantUsers);
  };

  return (
<Grid
  container
  sx={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    padding: 3,
  }}
>
  <Grid item sx={{ width: "100%", maxWidth: "400px" }}>
    <TextField
      label="Email"
      fullWidth
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  </Grid>

  <Grid item sx={{ width: "100%", maxWidth: "400px", mt: 2 }}>
    <TextField
      label="Password"
      type="password"
      fullWidth
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
  </Grid>

  <Grid item sx={{ width: "100%", maxWidth: "400px", mt: 2 }}>
    <Button
      variant="contained"
      fullWidth
      onClick={loginSystem}
      disabled={!email || !password}
    >
      Login
    </Button>
  </Grid>
</Grid>
  );
};

export default InitialLogin;
