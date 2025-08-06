import { baseApi } from "../../api/baseApi";

const branchEmplyApi = baseApi.injectEndpoints({
  endpoints: (builer) => ({
    createBanchEmply: builer.mutation({
      query: (branchEmlyData) => ({
        url: "/bracnh-employee/create-employee-branch",
        method: "POST",
        body: branchEmlyData,
      }),
    }),
    getEmployBranch: builer.query({
      query: (id) => ({
        url: "/",
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateBanchEmplyMutation, useGetEmployBranchQuery } =
  branchEmplyApi;
