import React from 'react';

import './collection-women.styles.scss';


const CollectionWomen = ({ id, name, price, imageUrl }) => (
  <div className='collection-women'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
    <div className='women-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
    </div>
  );
  
  export default CollectionWomen;
