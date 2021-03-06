import React from 'react';

import './collection-sneakers.styles.scss';


const CollectionSneakers = ({ id, name, price, imageUrl }) => (
  <div className='collection-sneakers'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
    <div className='sneakers-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
    </div>
  );
  
  export default CollectionSneakers;
