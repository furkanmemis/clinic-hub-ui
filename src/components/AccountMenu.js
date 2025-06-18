import { FaRegUser } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { useAuth } from "../Context/AuthContext";


const AccountMenu = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const {logout} = useAuth();

  const redirectHome = () =>{
    logout();
    navigate('/');
    setOpen(!open);
  };

  return (
    <div className="relative">
      <FaRegUser
        onClick={() => setOpen(!open)}
        color="white"
        size={25}
        className="cursor-pointer"
      />

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-gray-200 border border-black rounded shadow-md p-2 z-10">
          <ul className="text-sm text-gray-800">
            <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">Profile</li>
            <li onClick={()=>{redirectHome()}} className="hover:bg-gray-100 p-2 rounded cursor-pointer flex items-center gap-2">Logout <CiLogout/></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AccountMenu;