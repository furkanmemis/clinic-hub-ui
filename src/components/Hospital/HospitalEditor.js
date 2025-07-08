import { useEffect, useState } from "react";

const HospitalEditor = ({modalOpen}) => {
  const [open, setOpen] = useState(false);

  useEffect(()=>{
    setOpen(modalOpen); 
  },[])

  return <div>{open ? <div >

    <p>hospital model</p>

  </div> : null}</div>;
};

export default HospitalEditor;
