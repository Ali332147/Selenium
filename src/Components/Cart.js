import React, { useState } from 'react';
import { useEffect } from 'react';
import Card from './Card';
import Modal from 'react-modal';

const Cart = () => {
  let [carts,setCarts]=useState([]);
  let [service,setServices]=useState([]);
  const [modalIsOpen, setIsOpen] =useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  
  let handleBtn=(cart)=>{
    let newService=[...service,cart]
    setServices(newService);
  }
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>setCarts(data));
  },[]);
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  Modal.setAppElement('#root');
  return (
    
    <div className=''>
     <button className='bg-accent' onClick={openModal}>Open Modal</button>
   <div className='grid grid-cols-1 md:grid-cols-2 md:justify-between lg:grid-cols-3 lg:justify-between gap-5 py-8'>
   {
      carts.map((cart)=><Card key={cart.id} handleBtn={handleBtn} cart={cart}></Card>)
    } </div> 
    
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
      <button className='bg-accent' onClick={closeModal}>close</button>
      <div>
        {
          service.map((item)=>(<h1 key={item.id}>{item.name}</h1>))
        }
      </div>
      </Modal>
    </div>
  );
};

export default Cart;