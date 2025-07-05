import MenuSidebar from "../Menu/MenuSidebar";
import HospitalTable from "./HospitalTable";


const HospitalManagement = () => {
  return (
    <div className="grid grid-cols-[1.5fr_8.5fr] h-screen">
      <div>
        <MenuSidebar />
      </div>
      <div className="grid grid-rows-[0.5fr_9.5fr]">
        <div className="text-center">
          <p className="font-mono font-bold text-green-500 text-2xl">
            Hospital Management
          </p>
        </div>

        <div>
          <HospitalTable />
        </div>
      </div>
    </div>
  );
};

export default HospitalManagement;
