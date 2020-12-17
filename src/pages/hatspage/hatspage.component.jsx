import React from 'react';

import Hats_Data from '../../components/everythingforhats/hats.data';
import HatsPreview from '../../components/everythingforhats/preview-hats.component';



class HatsPage extends React.Component {
    constructor(props) {
        super(props);
    

        this.state = {
            hatsdata:Hats_Data

        }
    }
    render() {
        const {hatsdata} = this.state;
        return (
            <div className='hats-page'> 
            {
                hatsdata.map(({id, ...otherCollectionProps}) => (
                    <HatsPreview key={id} {...otherCollectionProps} />
                ))

            }

            </div>
        )
    }
} 

export default HatsPage;