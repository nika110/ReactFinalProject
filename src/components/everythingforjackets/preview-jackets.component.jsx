import React from 'react';

import './preview-jackets.styles.scss';
import CollectionJackets from './collection-jackets.component';


const JacketsPreview = ({ title, items }) => (
    <div className='jackets-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.map(({ id, ...otherItemProps }) => (
                    <CollectionJackets key={id} { ...otherItemProps } />
                ))
            }

        </div>
    </div>
    
)

export default JacketsPreview;