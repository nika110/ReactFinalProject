import React from 'react';

import Sneakers_Data from '../../components/everythingforsneakers/sneakers-data';
import SneakersPreview from '../../components/everythingforsneakers/preview-sneakers.component';
class SneakersPage extends React.Component {
    constructor(props) {
        super(props);
    

        this.state = {
            sneakersdata:Sneakers_Data

        }
    }
    render() {
        const {sneakersdata} = this.state;
        return (
            <div className='sneakers-page'> 
            {
                sneakersdata.map(({id, ...otherCollectionProps}) => (
                    <SneakersPreview key={id} {...otherCollectionProps} />
                ))

            }

            </div>
        )
    }
} 

export default SneakersPage;