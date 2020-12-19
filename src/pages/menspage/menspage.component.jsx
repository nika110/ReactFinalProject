import React from 'react';

import Mens_Data from '../../components/everythingformen/mens-data';
import MensPreview from '../../components/everythingformen/preview-mens.component';
class MensPage extends React.Component {
    constructor(props) {
        super(props);
    

        this.state = {
            mensdata:Mens_Data

        }
    }
    render() {
        const {mensdata} = this.state;
        return (
            <div className='mens-page'> 
            {
                mensdata.map(({id, ...otherCollectionProps}) => (
                    <MensPreview key={id} {...otherCollectionProps} />
                ))

            }

            </div>
        )
    }
} 

export default MensPage;