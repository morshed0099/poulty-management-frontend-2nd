import { baseApi } from "../../api/baseApi";

const employeeApi = baseApi.injectEndpoints({
  endpoints: (builer) => ({
    createEmployee: builer.mutation({
      query: (employeeData) => ({
        url: "/employee/create-employee",
        method: "POST",
        body: employeeData,
      }),
      invalidatesTags: ["Employee"],
    }),
    getAllemployee: builer.query({
      query: () => ({
        url: "/employee",
        method: "GET",
      }),
      providesTags: ["Employee"],
    }),
    getSingleEmployee: builer.query({
      query: (id) => ({
        url: `/employee/${id}`,
        method: "GET",
      }),
      providesTags: ["Employee"],
    }),

    updateEmployee: builer.mutation({
      query: (employeeData) => ({
        url: `/employee/${employeeData.id}`,
        method: "PUT",
        body: employeeData,
      }),
      invalidatesTags: ["Employee"],
    }),
    getEmployWithEmpId: builer.mutation({
      query: (employeeId) => ({
        url: "/employee/empid",
        method: "POST",
        body: employeeId,
      }),
    }),
  }),
});

export const {
  useCreateEmployeeMutation,
  useGetAllemployeeQuery,
  useGetSingleEmployeeQuery,
  useUpdateEmployeeMutation,
  useGetEmployWithEmpIdMutation,
} = employeeApi;
