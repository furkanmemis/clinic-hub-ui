import { IconButton, Modal, Typography, Box, TextField, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { HospitalService } from "../../services/Api";

const HospitalModal = ({ open, onClose, onRefresh }) => {
  const [name, setName] = useState("");
  const [adminName, setAdminName] = useState("");
  const [adminSurname, setAdminSurname] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const clear = () => {
    setName("");
    setAdminName("");
    setAdminSurname("");
    setAdminEmail("");
    setAdminPassword("");
    setAddress("");
    setPhone("");
  };

  const handleClose = () => {
    clear();
    onClose();
  };

  const createHospital = async () => {
    let body = {
        name,
        adminName,
        adminSurname,
        adminEmail,
        adminPassword,
        address,
        phone
    }

    try{

        const response = await HospitalService.post('create',body);

        if(response.status === 200){
            onRefresh(true);
            handleClose();
        }

    }catch(error){
        console.log("Create Hospital Error "+error)
        onRefresh(false);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "50vw",
          bgcolor: "white",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Grid size={12} container spacing={2}>
          <Grid size={9} sx={{ display: "flex", justifyContent: "flex-star" }}>
            <Typography variant="h6" style={{ color: "darkblue" }}>
              Create New Hospital
            </Typography>
          </Grid>
          <Grid size={3} sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={handleClose}>
              <IoMdClose />
            </IconButton>
          </Grid>
        </Grid>

        <Grid sx={{mb: 2}} spacing={2} size={12} container>
          <Grid container spacing={3} size={12}>
            <Grid size={4}>
              <TextField
                label="Hospital Name"
                fullWidth
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
              />
            </Grid>

            <Grid size={4}>
              <TextField
                label="Admin Name"
                fullWidth
                onChange={(e) => {
                  setAdminName(e.target.value);
                }}
                value={adminName}
              />
            </Grid>
            <Grid size={4}>
              <TextField
                label="Admin Surname"
                fullWidth
                onChange={(e) => {
                  setAdminSurname(e.target.value);
                }}
                value={adminSurname}
              />
            </Grid>
          </Grid>

          <Grid container spacing={3} size={12}>
            <Grid size={4}>
              <TextField
                label="Admin Password"
                fullWidth
                onChange={(e) => {
                  setAdminPassword(e.target.value);
                }}
                value={adminPassword}
              />
            </Grid>

            <Grid size={4}>
              <TextField
                label="Admin Email"
                fullWidth
                onChange={(e) => {
                  setAdminEmail(e.target.value);
                }}
                value={adminEmail}
              />
            </Grid>
            <Grid size={4}>
              <TextField
                label="Phone"
                fullWidth
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                value={phone}
              />
            </Grid>
          </Grid>

          <Grid size={12}>
            <TextField
              label="Address"
              multiline
              rows={3}
              fullWidth
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              value={address}
            />
          </Grid>
        </Grid>

        <Grid sx={{display: "flex", justifyContent: "center"}} size={12}>

            <Button
                variant="contained"
                style={{backgroundColor: "darkblue", color: "white"}}
                sx={{textTransform: "none"}}
                onClick={()=>{createHospital();}}
            >
                Add New Hospital
            </Button>

        </Grid>
      </Box>
    </Modal>
  );
};

export default HospitalModal;
