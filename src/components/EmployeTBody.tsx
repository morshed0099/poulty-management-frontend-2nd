import { TEmployee } from "../type";

const EmployeTBody = ({ employe }: { employe: TEmployee }) => {
  return (
    <tbody>
      <tr className="border">
        <td>{employe.name}</td>
        <td>{employe.designation}</td>
        <td>{employe.phoneNumber}</td>
        <td>{employe.createDate}</td>
        <td>{employe.employeeId}</td>
        <td>{employe.address.village}</td>
        <td>{employe.address.post}</td>
        <td>{employe.address.union}</td>
        <td>{employe.address.thana}</td>
        <td>{employe.address.upazila}</td>
        <td>{employe.address.distic}</td>

        {/* <Link to={`/branch/${brance.id}`}>
          <button className="btn btn-primary btn-sm mr-0.5">Edit</button>
        </Link> */}
        <button className="btn btn-secondary btn-sm">Delete</button>
      </tr>
    </tbody>
  );
};

export default EmployeTBody;
