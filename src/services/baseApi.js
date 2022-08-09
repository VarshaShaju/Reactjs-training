import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getStorage } from './utils';
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api/' ,
  prepareHeaders: (headers)  => {
    const token = getStorage("idToken");
    //console.log(token)
     // If we have a token set in state, let's assume that we should be passing it.
     if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }
    return headers
  },
}),
  

  refetchOnMountOrArgChange: true,
  tagTypes : ['Employee'],

  endpoints: (builder) => ({
    getAllEmployees:builder.query({
      query:()=>`/employee`,
    }),
    getEmployeeById: builder.query({
      query: (id) => `/employee/${id}`,
      providesTags: ['Employee'],
    }),

    createEmployee: builder.mutation({
    query: (body) => ({
      url:'/employee',
      method: 'POST',
      body: body,
    }),
    invalidatesTags: ['Employee'],
    }),

    UpdateEmployeeById: builder.mutation({
      query: ({id,body}) => ({
          url: `/employee/${id}`,
          method: "PUT",
          body: body,
        }),
    }),
    LoginEmployee: builder.mutation ({
        query: (body) =>{
          return({
            url:'employee/login',
            method: 'POST',
            body:body
          })
        }
    }),
    DeleteEmployeeById: builder.mutation({
      query: (id) => ({
        url: `/employee/${id}`,
        method: 'Delete',
      }),
      invalidatesTags: ['Employee'],
    })
  })
})
export const { useGetEmployeeByIdQuery , useCreateEmployeeMutation , useDeleteEmployeeByIdMutation, useUpdateEmployeeByIdMutation, useGetAllEmployeesQuery,useLoginEmployeeMutation} = baseApi


