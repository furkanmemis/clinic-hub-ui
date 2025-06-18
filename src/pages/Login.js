import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col gap-4 p-4 max-w-sm mx-auto">
      <div className="w-full flex justify-center">
        <h1 className="font-bold text-green-500 text-2xl font-mono">
          Clinic Hub
        </h1>
      </div>
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
      >
        Login
      </button>
    </div>
  );
};

export default Login;
