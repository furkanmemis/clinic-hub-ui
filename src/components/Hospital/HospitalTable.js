import { FaEdit } from "react-icons/fa";
import Grid from "@mui/material/Grid";
import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  Tooltip,
} from "@mui/material";

const HospitalTable = ({ hospitals }) => {
  const tableColumns = ["Hospital Name", "Admin", "Address", "Action"];

  return (
    <Grid container size={12}>
      <Table>
        <TableHead
          style={{ backgroundColor: "darkblue", border: "2px darkblue solid" }}
        >
          <TableRow>
            {tableColumns.map((column, index) => {
              return (
                <TableCell
                  style={{
                    color: "white",
                    fontFamily: "monospace",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                  key={index}
                >
                  {column}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody style={{ border: "2px darkblue solid" }}>
          {hospitals.map((hospital, index) => {
            return (
              <TableRow key={index}>
                <TableCell style={{ textAlign: "center" }}>
                  {hospital.name}
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  <Tooltip title={hospital.adminEmail}>
                    {hospital.adminName + " " + hospital.adminSurname}
                  </Tooltip>
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  {hospital.address}
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  <FaEdit />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Grid>
  );
};

export default HospitalTable;
