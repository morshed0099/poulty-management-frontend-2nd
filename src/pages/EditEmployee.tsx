import { useParams } from "react-router-dom";
import {
  useGetSingleEmployeeQuery,
  useUpdateEmployeeMutation,
} from "../redux/features/employee/employeeApi";
import { useState } from "react";
import toast from "react-hot-toast";

const EditEmployee = () => {
  const { id } = useParams();
  const { data } = useGetSingleEmployeeQuery(id);
  const [updateEmp] = useUpdateEmployeeMutation();
  const [designation, setDesignation] = useState("");

  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const from = e.currentTarget;
    const createDate = from.createDate.value;
    const name = from.employeeName.value;
    const phoneNumber = from.phoneNumber.value;
    const village = from.village.value;
    const post = from.post.value;
    const union = from.union.value;
    const upazila = from.upazila.value;
    const thana = from.thana.value;
    const nid = from.nid.value;
    const distic = from.distic.value;

    const employeeData = {
      id,
      createDate,
      name,
      phoneNumber,
      addressId: data?.data?.addressId,
      designation: designation ? designation : data?.data?.designation,
      nid,
      address: {
        village,
        post,
        union,
        upazila,
        thana,
        distic,
      },
    };
    try {
      await updateEmp(employeeData).unwrap();
      toast.success("employee details updated successfully !!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <div className="p-4 m-2.5 rounded-3xl border border-amber-300">
          <h1 className="text-2xl text-center p-8 font-bold text-red-700">
            Update Employee
          </h1>
          <div className="grid grid-cols-3">
            <div className="flex flex-col ">
              <label>Create Date</label>
              <input
                defaultValue={data?.data?.createDate}
                name="createDate"
                className="input"
                type="date"
              />
            </div>

            <div className="flex flex-col ">
              <label>Employee Name</label>
              <input
                defaultValue={data?.data?.name}
                name="employeeName"
                className="input"
                type="text"
              />
            </div>
            <div className="flex flex-col ">
              <label>Designation</label>
              <select
                onChange={(e) => setDesignation(e.target.value)}
                name=""
                className="select"
                id=""
              >
                <option
                  defaultValue={data?.data?.designation}
                  selected
                  disabled
                >
                  {data?.data?.designation}
                </option>
                <option value="Executive" className="option">
                  Executive
                </option>
                <option value="Sr Executive" className="option">
                  Sr Executive
                </option>
                <option value="Jr Executive" className="option">
                  Jr Executive
                </option>
              </select>
            </div>
            <div className="flex flex-col ">
              <label>Phone Number</label>
              <input
                defaultValue={data?.data?.phoneNumber}
                name="phoneNumber"
                className="input"
                type="text"
              />
            </div>

            <div className="flex flex-col ">
              <label>Employee NID</label>
              <input
                defaultValue={data?.data?.nid}
                name="nid"
                className="input"
                type="text"
              />
            </div>
          </div>
          <div>
            <h4 className="text-center p-8 text-2xl font-semibold ">Address</h4>
          </div>
          <div className="grid grid-cols-3">
            <div className="flex flex-col ">
              <label>Village</label>
              <input
                defaultValue={data?.data?.address?.village}
                name="village"
                className="input"
                type="text"
              />
            </div>
            <div className="flex flex-col ">
              <label>Post Ofiice</label>
              <input
                defaultValue={data?.data?.address?.post}
                name="post"
                className="input"
                type="text"
              />
            </div>
            <div className="flex flex-col ">
              <label>Union</label>
              <input
                defaultValue={data?.data?.address?.union}
                name="union"
                className="input"
                type="text"
              />
            </div>
            <div className="flex flex-col ">
              <label>Upazila</label>
              <input
                defaultValue={data?.data?.address?.upazila}
                name="upazila"
                className="input"
                type="text"
              />
            </div>
            <div className="flex flex-col ">
              <label>Police Station</label>
              <input
                defaultValue={data?.data?.address?.thana}
                name="thana"
                className="input"
                type="text"
              />
            </div>
            <div className="flex flex-col ">
              <label>Distic</label>
              <input
                defaultValue={data?.data?.address?.distic}
                name="distic"
                className="input"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="flex p-4 justify-end">
          <button className="btn btn-primary">Save</button>
        </div>
      </form>
    </div>
  );
};

export default EditEmployee;
