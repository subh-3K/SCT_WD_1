import React from 'react';
import { useParams } from 'react-router-dom';

export default function User() {
  const { userid } = useParams(); // Move this outside the return block

  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>User: {userid}</div> // Access userid directly
  );
}

 