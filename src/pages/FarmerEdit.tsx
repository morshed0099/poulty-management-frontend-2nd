import { useParams } from "react-router-dom";
import {
  useSingeleFarmerQuery,
  useUpdateFarmerMutation,
} from "../redux/features/farmer/farmerApi";
import { useState } from "react";
import { useAllbranceQuery } from "../redux/features/brance/branceApi";
import toast from "react-hot-toast";
import { Tbrance } from "./Allbrance";

const FarmerEdit = () => {
  const { id } = useParams();
  const { data: farmer } = useSingeleFarmerQuery(id);
  const { data } = useAllbranceQuery(undefined);
  const [updateFarmer] = useUpdateFarmerMutation();

  const [branchCode, setBranchCode] = useState<string | null>();
  const [farmType, setFarmType] = useState<string | null>();

  console.log(farmer);

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
      id,
      branchCode: branchCode ? branchCode : farmer?.data?.farmer?.branchCode,
      name,
      addressId: farmer?.data?.farmer?.addressId,
      createDate,
      farmType: farmType ? farmType : farmer?.data?.farmer?.farmType,
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
      await updateFarmer(farmerData);
      toast.success("farmer updated successfully !!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handelSubmit}>
        <div className="p-4 m-2.5 rounded-3xl border border-amber-300">
          <h1 className="text-2xl text-center p-8 font-bold text-red-700">
            Update Farmer
          </h1>
          <div className="grid grid-cols-3">
            <div className="flex flex-col ">
              <label>Create Date</label>
              <input
                defaultValue={farmer?.data.farmer.createDate}
                name="createDate"
                className="input"
                type="date"
              />
            </div>
            <div className="flex flex-col">
              <label>Select Branch Code</label>
              <select
                onChange={(e) => setBranchCode(e.target.value)}
                className="select"
              >
                <option
                  selected
                  disabled
                  defaultValue={farmer?.data?.farmer.branchCode}
                  className="option"
                >
                  {farmer?.data?.farmer.branchCode}
                </option>
                {data?.data.map((option: Tbrance) => (
                  <option>{option.branchCode}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col ">
              <label>Farmer Name</label>
              <input
                defaultValue={farmer?.data?.farmer.name}
                name="farmar"
                className="input"
                type="text"
              />
            </div>
            <div className="flex flex-col ">
              <label>Phone Number </label>
              <input
                defaultValue={farmer?.data?.farmer.phoneNumber}
                name="phoneNumber"
                className="input"
                type="text"
              />
            </div>
            <div className="flex flex-col ">
              <label>No of Sheed </label>
              <input
                defaultValue={farmer?.data?.farmer.totalShed}
                name="sheed"
                className="input"
                type="text"
              />
            </div>
            <div className="flex flex-col ">
              <label>Bird's Capacity </label>
              <input
                defaultValue={farmer?.data?.farmer.capacity}
                name="capacity"
                className="input"
                type="text"
              />
            </div>
            <div className="flex flex-col ">
              <label>Total Squer</label>
              <input
                defaultValue={farmer?.data?.farmer.totalSquare}
                name="squre"
                className="input"
                type="text"
              />
            </div>
            <div className="flex flex-col ">
              <label>Farmer NID</label>
              <input
                defaultValue={farmer?.data?.farmer.nid}
                name="nid"
                className="input"
                type="text"
              />
            </div>

            <div className="flex flex-col ">
              <label>Farm Type</label>
              <select
                onChange={(e) => setFarmType(e.target.value)}
                name=""
                className="select"
                id=""
              >
                <option
                  selected
                  disabled
                  defaultValue={farmer?.data?.farmer.farmType}
                  className="option"
                >
                  {farmer?.data?.farmer.farmType}
                </option>
                <option value="Broiler" className="option">
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
              <input
                defaultValue={farmer?.data?.address.village}
                name="village"
                className="input"
                type="text"
              />
            </div>
            <div className="flex flex-col ">
              <label>Post Ofiice</label>
              <input
                defaultValue={farmer?.data?.address.post}
                name="post"
                className="input"
                type="text"
              />
            </div>
            <div className="flex flex-col ">
              <label>Union</label>
              <input
                defaultValue={farmer?.data?.address.union}
                name="union"
                className="input"
                type="text"
              />
            </div>
            <div className="flex flex-col ">
              <label>Upazila</label>
              <input
                defaultValue={farmer?.data?.address.upazila}
                name="upazila"
                className="input"
                type="text"
              />
            </div>
            <div className="flex flex-col ">
              <label>Police Station</label>
              <input
                defaultValue={farmer?.data?.address.thana}
                name="policeStation"
                className="input"
                type="text"
              />
            </div>
            <div className="flex flex-col ">
              <label>Distic</label>
              <input
                defaultValue={farmer?.data?.address.distic}
                name="distic"
                className="input"
                type="text"
              />
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

export default FarmerEdit;
