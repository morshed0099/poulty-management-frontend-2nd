import { baseApi } from "../../api/baseApi";

const farmerApi = baseApi.injectEndpoints({
  endpoints: (builer) => ({
    createFarmer: builer.mutation({
      query: (farmarData) => ({
        url: "customer/create-farm",
        method: "POST",
        body: farmarData,
      }),
      invalidatesTags: ["Farmer"],
    }),
    allFarmer: builer.query({
      query: () => ({
        url: "/customer/farmer",
        method: "GET",
      }),
      providesTags: ["Farmer"],
    }),
    singeleFarmer: builer.query({
      query: (id) => ({
        url: `/customer/${id}`,
        method: "GET",
      }),
      providesTags: ["Farmer"],
    }),
    updateFarmer: builer.mutation({
      query: (updateData) => ({
        url: `/customer/${updateData.id}`,
        method: "PUT",
        body: updateData,
      }),
      invalidatesTags: ["Farmer"],
    }),
  }),
});

export const {
  useCreateFarmerMutation,
  useAllFarmerQuery,
  useSingeleFarmerQuery,
  useUpdateFarmerMutation,
} = farmerApi;
