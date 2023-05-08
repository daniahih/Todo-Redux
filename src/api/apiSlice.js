import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//rtk query to simplify the data handling and fetching
// Define our single API slice object
export const todoImgApi = createApi({
  reducerPath: "todoImgApi", // The cache reducer expects to be added at `state.todoImgApi`
  baseQuery: fetchBaseQuery({
    baseUrl: "https://emojihub.yurace.pro/api/random",
  }), // All of our requests will have URLs starting with this url

  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    // The `getRandomImg` endpoint is a "query" operation that returns data
    getRandomImg: builder.query({
      // The URL for the request is from the root
      query: () => "/",
    }),
  }),
});

// Export the auto-generated hook for the `getRandomImg` query endpoint
export const { useGetRandomImgQuery } = todoImgApi;
