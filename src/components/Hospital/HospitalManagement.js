import { useEffect, useState } from "react";
import MenuSidebar from "../Menu/MenuSidebar";
import HospitalTable from "./HospitalTable";
import { HospitalService } from "../../services/Api";
import Grid from "@mui/material/Grid";

const HospitalManagement = () => {

  const [hospitals,setHospitals] = useState([]);
  const [open,setOpen] = useState(false);

  const getAllHospital = async () => {
    try{
      const response = await HospitalService.get('get-all');
      setHospitals(response.data);
    }catch(error){
      console.log("Get All Hospital "+error);
    }
  };


  useEffect(()=>{
    getAllHospital();
  },[])


  return (
    <Grid container size={12}>

      <Grid size={1}>
        <MenuSidebar />

      </Grid>
      <Grid size={11} sx={{padding: 2}}>

        hospital management

      </Grid>

    </Grid>
  );
};

export default HospitalManagement;
