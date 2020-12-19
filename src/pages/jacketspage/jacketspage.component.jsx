import React from 'react';

import Jackets_Data from '../../components/everythingforjackets/jackets-data';
import JacketsPreview from '../../components/everythingforjackets/preview-jackets.component';

class JacketsPage extends React.Component {
    constructor(props) {
        super(props);
    

        this.state = {
            jacketsdata:Jackets_Data

        }
    }
    render() {
        const {jacketsdata} = this.state;
        return (
            <div className='jackets-page'> 
            {
                jacketsdata.map(({id, ...otherCollectionProps}) => (
                    <JacketsPreview key={id} {...otherCollectionProps} />
                ))

            }

            </div>
        )
    }
} 

export default JacketsPage;