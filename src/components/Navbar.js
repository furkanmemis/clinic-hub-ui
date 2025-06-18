import AccountMenu from "./AccountMenu";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const redirectToAppointment = () => {
    navigate("/appointment");
  };

  const redirectToHome = () => {
    navigate("/");
  };

  return (
    <nav className="bg-green-500 h-15 shadow-md p-3 flex justify-between">
      <div className="text-white font-bold flex justify-start">
        <p className="font-mono text-2xl" style={{cursor: "pointer"}} onClick={()=>{redirectToHome()}}>Clinic Hub</p>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => {
            redirectToAppointment();
          }}
          className="bg-blue-900 text-white p-2 rounded-md shadow-md hover:bg-blue-800"
        >
          Make an Appointment
        </button>
      </div>
      <div className="flex justify-end">
        <AccountMenu />
      </div>
    </nav>
  );
};

export default Navbar;
