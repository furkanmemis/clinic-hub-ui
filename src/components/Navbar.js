import { useEffect, useState } from "react";
import AccountMenu from "./AccountMenu";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [time, setTime] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setTime(getTime());
    }, 1000);
  });

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
    <nav className="bg-green-500 h-15 shadow-md p-3 flex justify-between">
      <div className="text-white font-bold flex justify-start">
        <div className="flex flex-between">
          <p
            className="font-mono text-2xl"
            style={{ cursor: "pointer" }}
            onClick={() => {
              redirectToHome();
            }}
          >
            Clinic Hub
          </p>
          <p className="p-2">{time}</p>

        </div>
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
