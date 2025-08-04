import React from "react";
import { useNavigate } from "react-router-dom";
import { useCreateBranchMutation } from "../redux/features/brance/branceApi";
import toast from "react-hot-toast";

const CreateBrance = () => {
  const navigate = useNavigate();
  const [createBranch] = useCreateBranchMutation();

  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const branchCode = e.currentTarget.branceCode.value;
    const locationName = e.currentTarget.branceLocation.value;
    const createDate = e.currentTarget.createDate.value;

    const branceInfo = {
      branchCode,
      locationName,
      type: "BranchOffice",
      createDate,
    };
    try {
      await createBranch(branceInfo).unwrap();
      form.reset();
      toast.success("branch created successfully !!");
      navigate("/branch");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-4">
      <h1 className="text-center text-2xl text-red-700 font-bold">
        Create Brance
      </h1>
      <form onSubmit={handelSubmit}>
        <div className="flex justify-evenly">
          <div>
            <label>select Date</label>
            <input name="createDate" className="input" type="date" />
          </div>
          <div>
            <label>Brance Location</label>
            <input name="branceLocation" className="input" type="text" />
          </div>

          <div>
            <label>Brance Code</label>
            <input name="branceCode" className="input" type="text" />
          </div>
        </div>
        <div className="flex justify-end">
          <button className="btn btn-accent">save</button>
        </div>
      </form>
    </div>
  );
};

export default CreateBrance;
