import React from 'react';

const Card = ({cart,handleBtn}) => {
  let {id,name,username,email}=cart;
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto justify-center items-center shadow-lg">
  <div className="card-body   ">
    <h2 className="card-title">{name}</h2>
    <div>
    <p>ID : {id}</p>
    <p>Email : {email}</p>
    <p>Username : {username}</p>
    </div>
    <div className="card-actions justify-center ">
      <button onClick={()=>handleBtn(cart)} className="btn btn-accent w-full">Services</button>
    </div>
  </div>
</div>
  );
};

export default Card;