import React from 'react';

const myDetails = ({ data }) => {
  return (
    <div>
      {data && (
        <div>
          <p>Name: {data.myName}</p>
          <p>Address: {data.myAddress}</p>
        </div>
      )}
    </div>
  );
};

export default myDetails;
