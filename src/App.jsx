import React from 'react';
import { Contents } from 'pages';
import { useFetch } from './hooks';

export default function App() {
  const { loading, data, error } = useFetch(process.env.REACT_APP_API_ROOT);

  if (loading) return <h1>Loading...</h1>;

  if (error) console.log(error);

  return <Contents data={data} />;
}
