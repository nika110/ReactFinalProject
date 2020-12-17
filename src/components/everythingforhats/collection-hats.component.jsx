import React from 'react';

import './collection-hats.styles.scss';

const CollectionHats = ({ id, name, price, imageUrl }) => (
  <div className='collection-hats'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
    <div className='hats-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
    </div>
  );
  
  export default CollectionHats;
