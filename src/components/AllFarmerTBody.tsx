import React from "react";
import { Link } from "react-router-dom";

type Farmer = {
  name: string;
  farmCode: number;
  branchCode: string;
  capacity: number;
  totalSquare: number;
  totalShed: number;
  phoneNumber: string;
  id: string;
  address: {
    village: string;
    post: string;
    union: string;
    upazila: string;
    thana: string;
    distic: string;
    id: string;
  };
};
const AllFarmerTBody = ({ farmer }: { farmer: Farmer }) => {
  console.log(farmer);

  return (
    <tbody>
      <tr className="border w-[90%]">
        <td>{farmer.branchCode}</td>
        <td>{farmer.farmCode}</td>
        <td>{farmer.name}</td>
        <td>{farmer.capacity}</td>
        <td>{farmer.totalSquare}</td>
        <td>{farmer.totalShed}</td>
        <td>{farmer.phoneNumber}</td>
        <td>{farmer.address.village}</td>
        <td>{farmer.address.post}</td>
        <td>{farmer.address.union}</td>
        <td>{farmer.address.upazila}</td>
        <td>{farmer.address.thana}</td>
        <td>{farmer.address.distic}</td>

        <div className="flex gap-2">
          <Link to={`/farmer/${farmer.id}`}>
            <button className="btn btn-primary btn-sm mr-0.5">Edit</button>
          </Link>
          <button className="btn btn-secondary btn-sm">Delete</button>
        </div>
      </tr>
    </tbody>
  );
};

export default AllFarmerTBody;
