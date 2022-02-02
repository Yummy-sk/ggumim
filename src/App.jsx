import React from 'react';
import { useFetch } from './hooks';

export default function App() {
  const { loading, data, error } = useFetch(process.env.REACT_APP_API_ROOT);
  console.log(data);
  if (loading) return <h1>Loading...</h1>;

  if (error) console.log(error);

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}
