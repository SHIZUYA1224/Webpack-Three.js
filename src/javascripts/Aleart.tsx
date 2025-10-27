import * as React from 'react';

const Aleart: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default Aleart;