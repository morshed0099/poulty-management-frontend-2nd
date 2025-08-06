import React from "react";

const TransferEmply = () => {
  return (
    <div className="p-4">
      <div>
        <h1 className="text-center text-red-700 text-2xl font-bold p-8">
          Old Branch Data
        </h1>
        <div className="flex justify-evenly">
          <div className="flex flex-col gap-2">
            <label>EmployeeId</label>
            <input className="input" name="employeeId" type="text" />
          </div>
          <div className="flex flex-col gap-2">
            <label>Employee Name</label>
            <input className="input" name="employeeName" type="text" />
          </div>
          <div className="flex flex-col gap-2">
            <label>start Date</label>
            <input className="input" name="startDate" type="date" />
          </div>
          <div className="flex flex-col gap-2">
            <label>End Date</label>
            <input className="input" name="endDate" type="date" />
          </div>
          <div className="flex flex-col gap-2">
            <label>Old Branch</label>
            <input className="input" name="branchCode" type="text" />
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center text-red-700 text-2xl font-bold p-8">
          New Branch data
        </h1>
        <div className="flex justify-evenly">
          <div className="flex flex-col gap-2">
            <label>EmployeeId</label>
            <input className="input" name="employeeId" type="text" />
          </div>
          <div className="flex flex-col gap-2">
            <label>Employee Name</label>
            <input className="input" name="employeeName" type="text" />
          </div>
          <div className="flex flex-col gap-2">
            <label>start Date</label>
            <input className="input" name="startDate" type="date" />
          </div>

          <div className="flex flex-col gap-2">
            <label>New Branch</label>
            <input className="input" name="branchCode" type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferEmply;
