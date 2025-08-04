export type TBrance = {
  locationName: string;
  branchCode: string;
};

export type TEmployee = {
  id?: string;
  createDate: string;
  name: string;
  designation: string;
  nid: string;
  employeeId: string;
  phoneNumber: string;
  addressId: string;
  address: {
    village: string;
    post: string;
    union: string;
    thana: string;
    upazila: string;
    distic: string;
  };
};
