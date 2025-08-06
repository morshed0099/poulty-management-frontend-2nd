import { useAllbranceQuery } from "../redux/features/brance/branceApi";
import { Tbrance } from "./Allbrance";
import { useGetEmployWithEmpIdMutation } from "../redux/features/employee/employeeApi";
import { useState } from "react";
import { useCreateBanchEmplyMutation } from "../redux/features/branchEmply/branchEmplyApi";
import toast from "react-hot-toast";

const EmployeePosting = () => {
  const { data } = useAllbranceQuery(undefined);

  const [employee, { data: employees }] = useGetEmployWithEmpIdMutation();
  const [branchCode, setBranchCode] = useState<string | null>();
  const [createPosting] = useCreateBanchEmplyMutation();

  const handelOnchange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const event = e.currentTarget.value;
    const employeeIds = {
      employeeId: event,
    };

    try {
      await employee(employeeIds).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const employePostingData = {
      employeeId: e.currentTarget.employeeId.value,
      branchCode,
      startDate: e.currentTarget.startDate.value,
    };
    if (!employePostingData.startDate) {
      return;
    }
    try {
      const result = await createPosting(employePostingData).unwrap();
      console.log(result);
      toast.success(result?.data?.message || result?.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <div className="flex gap-2 ">
          <div className="flex flex-col ">
            <label>Enter Employee id</label>
            <input
              onBlur={handelOnchange}
              name="employeeId"
              className="input"
              type="text"
            />
          </div>
          <button className="btn mt-[25px] btn-secondary"> view</button>
        </div>
        {employees?.data && (
          <>
            <div className="flex flex-col ">
              <label>Name</label>
              <input
                readOnly
                value={employees?.data?.name}
                name="employeeName"
                className="input"
                type="text"
              />
            </div>
            <div className="flex flex-col ">
              <label>Designation</label>
              <input
                readOnly
                value={employees?.data?.designation}
                name="designation"
                className="input"
                type="text"
              />
            </div>
            <div className="flex flex-col ">
              <label>Slect Barnch</label>

              <select
                onChange={(e) => setBranchCode(e.target.value)}
                className="select"
              >
                <option selected disabled>
                  select baranch
                </option>
                {data?.data.map((branch: Tbrance) => (
                  <option value={branch.branchCode} key={branch.id}>
                    {branch.branchCode}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col ">
              <label>Start Date</label>
              <input name="startDate" className="input" type="date" />
            </div>
            <button className="btn btn-primary">Save</button>
          </>
        )}
      </form>
    </div>
  );
};

export default EmployeePosting;
