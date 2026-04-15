import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Order, PaginatedResponse, Address } from "@/types";
import type { RootState } from "@/store";

interface CreateOrderRequest {
  items: Array<{
    productId: string;
    quantity: number;
    size?: string;
    color?: string;
  }>;
  shippingAddressId: string;
  paymentMethod: string;
  couponCode?: string;
  notes?: string;
}

interface OrderQueryParams {
  page?: number;
  limit?: number;
  status?: string;
}

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL ?? "https://api.example.com/v1",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ["Order", "Orders"],
  endpoints: (builder) => ({
    getOrders: builder.query<PaginatedResponse<Order>, OrderQueryParams | void>({
      query: (params) => {
        const searchParams = new URLSearchParams();
        if (params) {
          Object.entries(params).forEach(([k, v]) => {
            if (v !== undefined) searchParams.set(k, String(v));
          });
        }
        return `/orders?${searchParams.toString()}`;
      },
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ id }) => ({ type: "Order" as const, id })),
              { type: "Orders", id: "LIST" },
            ]
          : [{ type: "Orders", id: "LIST" }],
    }),

    getOrderById: builder.query<Order, string>({
      query: (id) => `/orders/${id}`,
      providesTags: (_result, _err, id) => [{ type: "Order", id }],
    }),

    createOrder: builder.mutation<Order, CreateOrderRequest>({
      query: (data) => ({
        url: "/orders",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ type: "Orders", id: "LIST" }],
    }),

    cancelOrder: builder.mutation<Order, string>({
      query: (id) => ({
        url: `/orders/${id}/cancel`,
        method: "PATCH",
      }),
      invalidatesTags: (_result, _err, id) => [{ type: "Order", id }],
    }),

    getAddresses: builder.query<Address[], void>({
      query: () => "/addresses",
    }),

    addAddress: builder.mutation<Address, Omit<Address, "id">>({
      query: (data) => ({
        url: "/addresses",
        method: "POST",
        body: data,
      }),
    }),

    updateAddress: builder.mutation<
      Address,
      { id: string; data: Partial<Address> }
    >({
      query: ({ id, data }) => ({
        url: `/addresses/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),

    deleteAddress: builder.mutation<void, string>({
      query: (id) => ({
        url: `/addresses/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetOrdersQuery,
  useGetOrderByIdQuery,
  useCreateOrderMutation,
  useCancelOrderMutation,
  useGetAddressesQuery,
  useAddAddressMutation,
  useUpdateAddressMutation,
  useDeleteAddressMutation,
} = orderApi;
