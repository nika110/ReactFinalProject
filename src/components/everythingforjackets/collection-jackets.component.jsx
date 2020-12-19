import React from 'react';

import './collection-jackets.styles.scss';

const CollectionJackets = ({ id, name, price, imageUrl }) => (
  <div className='collection-jackets'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
    <div className='jackets-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
    </div>
  );
  
  export default CollectionJackets;
