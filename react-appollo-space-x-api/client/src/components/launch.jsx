import React from 'react';
import { useParams } from 'react-router-dom';

const Launch = () => {
  const { flight_number } = useParams();

  return (
    <div>
      <h1>Flight Number {flight_number} Detail</h1>
    </div>
  );
};

export default Launch;
