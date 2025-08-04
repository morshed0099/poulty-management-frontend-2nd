import { baseApi } from "../../api/baseApi";

const employeeApi = baseApi.injectEndpoints({
  endpoints: (builer) => ({
    createEmployee: builer.mutation({
      query: (employeeData) => ({
        url: "",
        method: "POST",
        body: employeeData,
      }),
    }),
  }),
});

export const { useCreateEmployeeMutation } = employeeApi;
