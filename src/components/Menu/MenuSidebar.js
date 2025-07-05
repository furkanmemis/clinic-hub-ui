import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const MenuSidebar = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const sidebarContent = [
    { title: "Home", path: "/" },
    { title: "Menu" , path: "/menu"},
    { title: "User" , path: "/user"},
    { title: "Appointment", path: "/appointment" },
    { title: "Hospital",path:"/hospital" },
    { title: "Settings",path:"/" },
  ];

  const navigateTo = (path) => {
    navigate(path);
  }

  return (
    <div className={`${open ? 'w-40' : 'w-14'} bg-green-300 text-blue-700 p-4 rounded-md`}>
      {open ? (
        <div>
          <div className="flex justify-between mb-4">
            <div>
              <p className="font-mono text-2xl">Menu</p>
            </div>
            <div>
              <GiHamburgerMenu className="cursor-pointer" onClick={()=>{setOpen(!open)}} size={24} />
            </div>
          </div>

          {sidebarContent.map((content, index) => {
            return (
              <div>
                <p className="p-2 cursor-pointer" onClick={()=>{navigateTo(content.path)}} key={index}>
                  {content.title}
                </p>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <GiHamburgerMenu className="cursor-pointer" onClick={()=>{setOpen(!open)}} size={24} />
        </div>
      )}
    </div>
  );
};

export default MenuSidebar;
