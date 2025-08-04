import BanchTableBody from "../components/BanchTableBody";
import { useAllbranceQuery } from "../redux/features/brance/branceApi";

export type Tbrance = {
  branchCode: string;
  type: string;
  locationName: string;
  id: string;
};

const Allbrance = () => {
  const { data, isLoading } = useAllbranceQuery(undefined);

  if (isLoading) {
    <h1 className="text-6xl font-bold text-re">please wait</h1>;
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>Brance Location</th>
              <th>type</th>
              <th>Brance Code</th>
            </tr>
          </thead>

          {data?.data.map((brance: Tbrance) => (
            <BanchTableBody key={brance.id} brance={brance} />
          ))}
        </table>
      </div>
    </div>
  );
};

export default Allbrance;
