import { useState } from "react";
import InitialLogin from "../components/InitalLogin";
import TenantLogin from "../components/TenantLogin";

const Login = () => {
  const [inital, setInital] = useState(false);
  const [tenantUsers,setTenantUser] = useState([]);

  return (
    <div className="flex flex-col gap-4 p-4 max-w-sm mx-auto">
      <div className="w-full flex justify-center">
        <h1 className="font-bold text-green-500 text-2xl font-mono">
          Clinic Hub
        </h1>
      </div>

      {!inital ? (
        <div>
          <InitialLogin onCheck={(check) => {check ? setInital(true) : setInital(false)}} onChangeTenantList={(tenantUsers) => {setTenantUser(tenantUsers)}} />
        </div>
      ) : (
        <div>
          <TenantLogin tenantUser={tenantUsers} />
        </div>
      )}
    </div>
  );
};

export default Login;
