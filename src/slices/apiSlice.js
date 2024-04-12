import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
const baseQuery = fetchBaseQuery({
  baseUrl: "https://mern-auth-backend-dcxe.onrender.com/",
});
export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["users"],
  endpoints: (builder) => ({}),
});
