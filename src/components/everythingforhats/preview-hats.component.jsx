import React from 'react';

import CollectionHats from './collection-hats.component';

import './preview-hats.styles.scss';


const HatsPreview = ({ title, items }) => (
    <div className='hats-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.map(({ id, ...otherItemProps }) => (
                    <CollectionHats key={id} { ...otherItemProps } />
                ))
            }

        </div>
    </div>
    
)

export default HatsPreview;