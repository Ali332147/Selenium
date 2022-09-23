import React from 'react';

const Share = () => {
  let handleButton=()=>{
    alert('Hello alert');
  }
  return (
    <div>
      <button className='btn btn-success' onClick={handleButton}>Click Me</button>
    </div>
  );
};

export default Share;