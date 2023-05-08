import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoImgApi = createApi({
  reducerPath: "todoImgApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://emojihub.yurace.pro/api/random",
  }),
  endpoints: (builder) => ({
    getRandomImg: builder.query({
      query: () => "/",
    }),
  }),
});

export const { useGetRandomImgQuery } = todoImgApi;
