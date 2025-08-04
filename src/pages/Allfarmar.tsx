import AllFarmerTBody from "../components/AllFarmerTBody";
import { useAllFarmerQuery } from "../redux/features/farmer/farmerApi";

const Allfarmar = () => {
  const { data } = useAllFarmerQuery(undefined);
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

  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>Branch Code</th>
              <th>Farm Code</th>
              <th>Name</th>
              <th>Capacity</th>
              <th>Total Squre</th>
              <th>Total Sheed</th>
              <th>Phone</th>
              <th>Village</th>
              <th>Post</th>
              <th>Union</th>
              <th>Upazila</th>
              <th>Thana</th>
              <th>Distic</th>
              <th>Action</th>
            </tr>
          </thead>
          {data?.data.map((farmer: Farmer) => (
            <AllFarmerTBody key={farmer.id} farmer={farmer} />
          ))}
          
        </table>
      </div>
    </div>
  );
};

export default Allfarmar;
