import { useEffect, useState } from "react";
import AccountMenu from "./AccountMenu";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";

const Navbar = () => {
  const navigate = useNavigate();
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => clearInterval(interval); // Temizle
  }, []);

  const redirectToAppointment = () => {
    navigate("/appointment");
  };

  const redirectToHome = () => {
    navigate("/");
  };

  const getTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <Grid
      container
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: "darkblue",
        borderBottom: "1px solid #ccc",
        padding: "10px",
      }}
    >
      <Grid size={6}>
        <p
          style={{
            fontFamily: "monospace",
            fontSize: 20,
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
            padding: 3
          }}
          onClick={redirectToHome}
        >
          Clinic Hub
        </p>
      </Grid>

      <Grid size={6} sx={{ display: "flex", alignItems: "center" ,justifyContent: "flex-end" }}>
        <AccountMenu />
      </Grid>
    </Grid>
  );
};

export default Navbar;
