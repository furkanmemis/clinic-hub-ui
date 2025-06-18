import { useState } from "react";
import InitialLogin from "../components/InitalLogin";

const Login = () => {
  const [inital, setInital] = useState(false);

  return (
    <div className="flex flex-col gap-4 p-4 max-w-sm mx-auto">
      <div className="w-full flex justify-center">
        <h1 className="font-bold text-green-500 text-2xl font-mono">
          Clinic Hub
        </h1>
      </div>

      {!inital ? (
        <div>
          <InitialLogin onCheck={(check) => {check ? setInital(true) : setInital(false)}} />
        </div>
      ) : (
        <div>
          <p>tenant</p>
        </div>
      )}
    </div>
  );
};

export default Login;
