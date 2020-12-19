import React from 'react';

import './preview-women.styles.scss';
import CollectionWomen from './collection-women.component';

const WomenPreview = ({ title, items }) => (
    <div className='women-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.map(({ id, ...otherItemProps }) => (
                    <CollectionWomen key={id} { ...otherItemProps } />
                ))
            }

        </div>
    </div>
    
)

export default WomenPreview;