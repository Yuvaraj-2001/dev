import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const blogsApi = createApi({
    reducerPath: 'blogs',
    baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:3300',
    //   fetchFn: async (...args)=>{
    //     await pause(1000);
    //     return fetch(...args);
    //   }
    }),
    endpoints(builder){
        return {
            fetchTopics: builder.query({
                // providesTags: (result, error, user) => {
                //   console.log('onFly', user);
                //   return [{type: 'Album', id: user.id}];
                // },
                query: (user) =>{
                  return {
                    url: '/topics',
                    // params: { userId: user.id },
                    method: 'GET',
                  }
                },
              }),
        }
    }
});

export const { useFetchTopicsQuery  } = blogsApi;
export { blogsApi}