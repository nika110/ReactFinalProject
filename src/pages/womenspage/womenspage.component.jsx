import React from 'react';

import Womens_Data from '../../components/everythingforwomen/women-data';
import WomenPreview from '../../components/everythingforwomen/preview-women.component';
class WomenPage extends React.Component {
    constructor(props) {
        super(props);
    

        this.state = {
            womendata:Womens_Data

        }
    }
    render() {
        const {womendata} = this.state;
        return (
            <div className='women-page'> 
            {
                womendata.map(({id, ...otherCollectionProps}) => (
                    <WomenPreview key={id} {...otherCollectionProps} />
                ))

            }

            </div>
        )
    }
} 

export default WomenPage;