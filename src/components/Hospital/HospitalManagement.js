import { useEffect, useState } from "react";
import MenuSidebar from "../Menu/MenuSidebar";
import HospitalTable from "./HospitalTable";
import { HospitalService } from "../../services/Api";
import Grid from "@mui/material/Grid";
import { Typography, TextField, Button } from "@mui/material";
import HospitalModal from "./HospitalModal";

const HospitalManagement = () => {
  const [hospitals, setHospitals] = useState([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const getAllHospital = async () => {
    try {
      const response = await HospitalService.get("get-all");
      setHospitals(response.data);
    } catch (error) {
      console.log("Get All Hospital " + error);
    }
  };

  useEffect(() => {
    getAllHospital();
  }, []);

  return (
    <Grid container size={12}>
      <Grid size={12}>
        <HospitalModal
          open={open}
          onClose={() => {
            setOpen(!open);
          }}
          onRefresh={(refresh) => {
            if(refresh){
              getAllHospital();
            }
          }}
        />
      </Grid>
      <Grid size={1}>
        <MenuSidebar />
      </Grid>
      <Grid size={11} sx={{ padding: 2 }}>
        <Grid
          size={12}
          sx={{ display: "flex", justifyContent: "center", mb: 5 }}
        >
          <Typography
            variant="h4"
            style={{ color: "darkblue", fontFamily: "monospace" }}
          >
            Hospital Management
          </Typography>
        </Grid>

        <Grid spacing={3} container size={12} sx={{ mb: 3 }}>
          <Grid size={9}>
            <TextField
              label="Search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              fullWidth
            />
          </Grid>

          <Grid size={3} sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              size="small"
              style={{
                backgroundColor: "darkblue",
                color: "white",
                textTransform: "none",
              }}
              variant="contained"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Add New Hospital
            </Button>
          </Grid>
        </Grid>

        <HospitalTable hospitals={hospitals} />
      </Grid>
    </Grid>
  );
};

export default HospitalManagement;
