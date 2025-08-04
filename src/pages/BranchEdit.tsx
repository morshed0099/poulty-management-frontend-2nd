import { useParams } from "react-router-dom";
import {
  useGetSingleBranchQuery,
  useUpdateBranceMutation,
} from "../redux/features/brance/branceApi";

const BranchEdit = () => {
  const { id } = useParams();

  const { data } = useGetSingleBranchQuery({ id });
  const [updateBranch, { data: update }] = useUpdateBranceMutation();

  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const from = e.currentTarget;
    const updateData = {
      locationName: from.locationName.value,
      createDate: from.createDate.value,
      branchCode: from.branchCode.value,
      id,
    };
    await updateBranch(updateData).unwrap();
    console.log(update);
  };

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <div className="flex justify-evenly">
          <div>
            <label>select Date</label>
            <input
              defaultValue={data?.data.createDate}
              name="createDate"
              className="input"
              type="date"
            />
          </div>
          <div>
            <label>Brance Location</label>
            <input
              defaultValue={data?.data.locationName}
              name="locationName"
              className="input"
              type="text"
            />
          </div>

          <div>
            <label>Brance Code</label>
            <input
              defaultValue={data?.data.branchCode}
              name="branchCode"
              className="input"
              type="text"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button className="btn btn-accent">save</button>
        </div>
      </form>
    </div>
  );
};

export default BranchEdit;
