import React from 'react';


import CollectionMens from './collection-mens.component';
import './preview-mens.styles.scss';

const MensPreview = ({ title, items }) => (
    <div className='mens-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.map(({ id, ...otherItemProps }) => (
                    <CollectionMens key={id} { ...otherItemProps } />
                ))
            }

        </div>
    </div>
    
)

export default MensPreview;