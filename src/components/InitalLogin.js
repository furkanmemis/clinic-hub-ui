import { useState } from "react";
import {useAuth} from "../Context/AuthContext"



const InitialLogin = ({onCheck}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login} = useAuth();

  const loginSystem = async () =>{
    await login(email,password);
    onCheck(true);

  };

  return (
    <div className="flex flex-col gap-4 p-4 max-w-sm mx-auto">
      <input
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded"
      />

      <input
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded"
      />

      <button
        disabled={email === "" || password === ""}
        className="bg-green-500 font-mono text-white p-2 rounded hover:bg-green-400 disabled:bg-green-200 disabled:text-black"
        onClick={()=>{loginSystem();}}
      >
        Login
      </button>
    </div>
  );
};

export default InitialLogin
