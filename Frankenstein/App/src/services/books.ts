// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Book, BookResponse } from './types';

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

// Define a service using a base URL and expected endpoints
export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.googleapis.com/books/v1/',
  }),
  tagTypes: ['Book'],
  endpoints: (builder) => ({
    getBook: builder.query<Book, string>({
      query: (id) => `volumes/${id}?key=${GOOGLE_API_KEY}`,
      transformResponse: (response: BookResponse) => {
        return {
          title: response.volumeInfo.title,
          description: response.volumeInfo.description,
          image: response.volumeInfo.imageLinks.thumbnail,
          link: response.volumeInfo.previewLink,
        };
      },
      providesTags: (_result, _error, id) => {
        return [{ type: 'Book', id }];
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBookQuery } = booksApi;
