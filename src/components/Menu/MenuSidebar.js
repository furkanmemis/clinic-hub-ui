import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";

const MenuSidebar = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const sidebarContent = [
    { title: "Home", path: "/" },
    { title: "Menu", path: "/menu" },
    { title: "User", path: "/user" },
    { title: "Appointment", path: "/appointment" },
    { title: "Hospital", path: "/hospital" },
    { title: "Settings", path: "/settings" },
  ];

  const navigateTo = (path) => {
    navigate(path);
  };

  const handleChangeOpen = () => {
    setOpen(!open);
  };

  return (
    <Grid
      container
      size={12}
      sx={{
        width: open ? "100%" : "25%",
        padding: 1,
        backgroundColor: "darkblue",
        borderRadius: "4px",
      }}
    >
      {open ? (
        <Grid size={12}>
          <Grid
            size={12}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Grid size={6}>
              <p
                style={{
                  fontFamily: "monospace",
                  fontSize: 20,
                  color: "white",
                }}
              >
                Menu
              </p>
            </Grid>
            <Grid size={6} sx={{ display: "flex", justifyContent: "center" }}>
              <IconButton sx={{ cursor: "pointer" }}>
                <GiHamburgerMenu
                  onClick={() => {
                    handleChangeOpen();
                  }}
                  color="white"
                  size={24}
                />
              </IconButton>
            </Grid>
          </Grid>

          <Grid size={12}>
            {sidebarContent.map((content, index) => {
              return (
                <Grid
                  size={12}
                  sx={{
                    cursor: "pointer",
                    color: "white",
                    mb: 2,
                    ":hover": { backgroundColor: "white", color: "darkblue", borderRadius: "2px" },
                  }}
                >
                  <p
                    style={{ padding: 2, fontFamily: "monospace", fontSize: 14 }}
                    onClick={() => {
                      navigateTo(content.path);
                    }}
                    key={index}
                  >
                    {content.title}
                  </p>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      ) : (
        <Grid size={12} sx={{ display: "flex", justifyContent: "center" }}>
          <IconButton sx={{ cursor: "pointer" }}>
            <GiHamburgerMenu
              onClick={() => {
                handleChangeOpen();
              }}
              color="white"
              size={24}
            />
          </IconButton>
        </Grid>
      )}
    </Grid>
  );
};

export default MenuSidebar;
