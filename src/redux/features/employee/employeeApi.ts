import { baseApi } from "../../api/baseApi";

const employeeApi = baseApi.injectEndpoints({
  endpoints: (builer) => ({
    createEmployee: builer.mutation({
      query: (employeeData) => ({
        url: "/employee/create-employee",
        method: "POST",
        body: employeeData,
      }),
    }),
    getAllemployee: builer.query({
      query: () => ({
        url: "/employee",
        method: "GET",
      }),
    }),
    getSingleEmployee: builer.query({
      query: (id) => ({
        url: `/employee/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateEmployeeMutation,
  useGetAllemployeeQuery,
  useGetSingleEmployeeQuery,
} = employeeApi;
