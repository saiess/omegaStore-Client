import {Seller, SellerResponse } from "../../interfaces";
import { baseQuery } from "../api";
import { createApi } from "@rtk-incubator/rtk-query/react";

export const sellerApi = createApi({
  reducerPath: "sellerApi",
  baseQuery,

  endpoints: (build) => ({
    registerSeller: build.mutation({
      query: (credentials: Seller) => ({
        url: "seller/register",
        method: "POST",
        body: credentials,
      }),
    }),

    getSellers: build.query<SellerResponse, void>({
      query: () => ({ url: "seller" }),
    }),
    getSellerById: build.query<Seller, string>({
      query: (id) => ({ url: `seller/${id}` }),
    }),
    updateSeller: build.mutation<Seller, Partial<Seller>>({
      query: ({ id, ...patch }) => ({
        url: `seller/${id}`,
        method: "PUT",
        body: patch,
      }),
    }),

    deleteSeller: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `seller/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});
export const {
  useRegisterSellerMutation,
  useGetSellersQuery,
  useGetSellerByIdQuery,
  useUpdateSellerMutation,
  useDeleteSellerMutation,
} = sellerApi;
