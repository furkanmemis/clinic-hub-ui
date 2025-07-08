import { FaRegUser } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { useAuth } from "../Context/AuthContext";
import Grid from "@mui/material/Grid";

const AccountMenu = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const redirectHome = () => {
    logout();
    navigate("/");
    setOpen(!open);
  };

  return (
    <Grid sx={{ position: "relative" }}>
      <FaRegUser
        onClick={()=>{}}
        color="white"
        size={25}
        className="cursor-pointer"
      />

      {open && (
        <Grid
          sx={{
            position: "absolute",
            right: 0,
            mt: 2,
            width: "40%",
            backgroundColor: "gray",
          }}
        >
          <ul style={{fontSize:12}}>
            <li style={{":hover":{backgroundColor: "gray",padding: 2}}}>
              Profile
            </li>
            <li
              onClick={() => {
                redirectHome();
              }}
              className="hover:bg-gray-100 p-2 rounded cursor-pointer flex items-center gap-2"
            >
              Logout <CiLogout />
            </li>
          </ul>
        </Grid>
      )}
    </Grid>
  );
};

export default AccountMenu;
