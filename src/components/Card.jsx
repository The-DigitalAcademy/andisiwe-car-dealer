import React from 'react';

function Card({ image, name, price }) {

  let amount = Number(price.slice(1))

  function buy() {
    if (amount <= 200) {
      alert('We are currently out of stock')
    } else {
      alert('We are available lot of stock')
    }
  }

  return (
    <div className='col-md-3 mb-4'>
      <div className='card text-center'>
        <img src={image} className='card-img-top' alt='...' />
        <div className='card-body'>
          <p className='card-text'>{name}</p>
          <h4 className='card-text font-bold'>{price}</h4>
          <br />
          <button onClick={buy} className='btn btn-danger'>
           BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;