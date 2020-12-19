import React from 'react';

import './preview-sneakers.styles.scss';

import CollectionSneakers from './collection-sneakers.component'

const SneakersPreview = ({ title, items }) => (
    <div className='sneakers-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.map(({ id, ...otherItemProps }) => (
                    <CollectionSneakers key={id} { ...otherItemProps } />
                ))
            }

        </div>
    </div>
    
)

export default SneakersPreview;