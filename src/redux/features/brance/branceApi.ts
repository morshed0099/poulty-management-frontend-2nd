import { baseApi } from "../../api/baseApi";

const branceApi = baseApi.injectEndpoints({
  endpoints: (builer) => ({
    allbrance: builer.query({
      query: () => ({
        url: "/branch",
        method: "GET",
      }),
      providesTags: ["Branch"],
    }),
    createBranch: builer.mutation({
      query: (branchInfo) => ({
        url: "/branch/create-brance",
        method: "POST",
        body: branchInfo,
      }),
      invalidatesTags: ["Branch"],
    }),
    getSingleBranch: builer.query({
      query: (id) => ({
        url: `/branch/${id.id}`,
        method: "GET",
      }),
      providesTags: ["Branch"],
    }),
    updateBrance: builer.mutation({
      query: (updateData) => ({
        url: `/branch/${updateData.id}`,
        method: "PUT",
        body: updateData,
      }),
      invalidatesTags: ["Branch"],
    }),
  }),
});

export const {
  useAllbranceQuery,
  useCreateBranchMutation,
  useGetSingleBranchQuery,
  useUpdateBranceMutation,
} = branceApi;
