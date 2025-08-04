import { Link } from "react-router-dom";
import { Tbrance } from "../pages/Allbrance";

const BanchTableBody = ({ brance }: { brance: Tbrance }) => {
  return (
    <tbody>
      <tr className="border">
        <td>{brance.locationName}</td>
        <td>{brance.type}</td>
        <td>{brance.branchCode}</td>
        <Link to={`/branch/${brance.id}`}>
          <button className="btn btn-primary btn-sm mr-0.5">Edit</button>
        </Link>
        <button className="btn btn-secondary btn-sm">Delete</button>
      </tr>
    </tbody>
  );
};

export default BanchTableBody;
