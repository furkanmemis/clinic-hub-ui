import { FaEdit } from "react-icons/fa";


const HospitalTable = () => {
  return (
    <div>
      <table className="border-2 border-blue-700 w-full">
        <thead className="bg-green-400">
          <tr className="text-blue-700 font-bold text-center">
            <th>Name</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="font-bold text-center">
          <tr>
            <td className="w-auto">İnegöl Devlet Hastanesi</td>
            <td className="w-auto">Ertuğrulgazi mahallesi cumhuriyet caddesi</td>
            <td className="w-auto flex justify-center">
                <FaEdit size={16}/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HospitalTable;
