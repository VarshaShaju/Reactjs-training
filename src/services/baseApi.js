// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api'}),
  endpoints: (builder) => ({
    getEmployeeList: builder.query({
      query: () => `/employee`,
    }),
  }),
})
export default baseApi
export const { useGetEmployeeListQuery } = baseApi