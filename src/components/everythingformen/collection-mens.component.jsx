import React from 'react';

import './collection-mens.styles.scss';


const CollectionMens = ({ id, name, price, imageUrl }) => (
  <div className='collection-mens'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
    <div className='mens-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
    </div>
  );
  
  export default CollectionMens;
