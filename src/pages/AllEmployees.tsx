import EmployeTBody from "../components/EmployeTBody";

import { useGetAllemployeeQuery } from "../redux/features/employee/employeeApi";
import { TEmployee } from "../type/index";

const AllEmployees = () => {
  const { data } = useGetAllemployeeQuery(undefined);

  return (
    <div className="overflow-hidden p-2">
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>Name</th>
              <th>Designation</th>
              <th>Phone</th>
              <th>createDate</th>
              <th>ID</th>
              <th>Village</th>
              <th>Post</th>
              <th>Union</th>
              <th>Thana</th>
              <th>Upazila</th>
              <th>Distic</th>
            </tr>
          </thead>
          {data?.data.map((employe: TEmployee) => (
            <EmployeTBody key={employe.id} employe={employe} />
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllEmployees;
