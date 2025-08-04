import React, { useState } from "react";
import { useAllbranceQuery } from "../redux/features/brance/branceApi";
import { useCreateFarmerMutation } from "../redux/features/farmer/farmerApi";
import toast from "react-hot-toast";
import { TBrance } from "../type";

const CreateFarmer = () => {
  // all branch retive for  selecet branch code
  const { data } = useAllbranceQuery(undefined);
  const [createFarmer] = useCreateFarmerMutation();

  const [branchCode, setBranchCode] = useState("");
  const [farmType, setFarmType] = useState("Both");

  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const from = e.currentTarget;
    const createDate = from.createDate.value;
    const name = from.farmar.value;
    const phoneNumber = e.currentTarget.phoneNumber.value;
    const sheed = parseInt(e.currentTarget.sheed.value);
    const capacity = parseInt(e.currentTarget.capacity.value);
    const squre = parseInt(e.currentTarget.squre.value);
    const nid = e.currentTarget.nid.value;
    const village = e.currentTarget.village.value;
    const post = e.currentTarget.post.value;
    const union = e.currentTarget.union.value;
    const upazila = e.currentTarget.upazila.value;
    const policeStation = e.currentTarget.policeStation.value;
    const distic = e.currentTarget.distic.value;

    const farmerData = {
      branchCode,
      name,
      createDate,
      farmType,
      totalShed: sheed,
      phoneNumber,
      capacity,
      nid,
      totalSquare: squre,
      address: {
        village,
        post,
        union,
        upazila,
        distic,
        thana: policeStation,
      },
    };
    try {
      await createFarmer(farmerData).unwrap();
      toast.success("farmer created successfully !!!");
      from.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handelSubmit}>
        <div className="p-4 m-2.5 rounded-3xl border border-amber-300">
          <h1 className="text-2xl text-center p-8 font-bold text-red-700">
            Create Farmer
          </h1>
          <div className="grid grid-cols-3">
            <div className="flex flex-col ">
              <label>Create Date</label>
              <input name="createDate" className="input" type="date" />
            </div>
            <div className="flex flex-col">
              <label>Select Branch Code</label>
              <select
                onChange={(e) => setBranchCode(e.target.value)}
                className="select"
              >
                {data?.data.map((option: TBrance) => (
                  <option className="option">{option.branchCode}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col ">
              <label>Farmer Name</label>
              <input name="farmar" className="input" type="text" />
            </div>
            <div className="flex flex-col ">
              <label>Phone Number </label>
              <input name="phoneNumber" className="input" type="text" />
            </div>
            <div className="flex flex-col ">
              <label>No of Sheed </label>
              <input name="sheed" className="input" type="text" />
            </div>
            <div className="flex flex-col ">
              <label>Bird's Capacity </label>
              <input name="capacity" className="input" type="text" />
            </div>
            <div className="flex flex-col ">
              <label>Total Squer</label>
              <input name="squre" className="input" type="text" />
            </div>
            <div className="flex flex-col ">
              <label>Farmer NID</label>
              <input name="nid" className="input" type="text" />
            </div>

            <div className="flex flex-col ">
              <label>Farm Type</label>
              <select
                onChange={(e) => setFarmType(e.target.value)}
                name=""
                className="select"
                id=""
              >
                <option selected value="Broiler" className="option">
                  Broiler
                </option>
                <option value="Color" className="option">
                  Color
                </option>
                <option value="Both" className="option">
                  Both
                </option>
              </select>
            </div>
          </div>

          <div>
            <h4 className="text-center p-8 text-2xl font-semibold ">Address</h4>
          </div>
          <div className="grid grid-cols-3">
            <div className="flex flex-col ">
              <label>Village</label>
              <input name="village" className="input" type="text" />
            </div>
            <div className="flex flex-col ">
              <label>Post Ofiice</label>
              <input name="post" className="input" type="text" />
            </div>
            <div className="flex flex-col ">
              <label>Union</label>
              <input name="union" className="input" type="text" />
            </div>
            <div className="flex flex-col ">
              <label>Upazila</label>
              <input name="upazila" className="input" type="text" />
            </div>
            <div className="flex flex-col ">
              <label>Police Station</label>
              <input name="policeStation" className="input" type="text" />
            </div>
            <div className="flex flex-col ">
              <label>Distic</label>
              <input name="distic" className="input" type="text" />
            </div>
          </div>
        </div>
        <div className="flex p-4 justify-end">
          <button className="btn btn-accent">Save</button>
        </div>
      </form>
    </>
  );
};

export default CreateFarmer;
