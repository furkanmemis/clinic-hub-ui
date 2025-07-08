import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Grid container rowSpacing={12} size={12}>
          <Grid size={12}>
            <Navbar />
          </Grid>

          <Grid size={12}>
            <AppRoutes />
          </Grid>
        </Grid>
      </Router>
    </AuthProvider>
  );
}

export default App;
