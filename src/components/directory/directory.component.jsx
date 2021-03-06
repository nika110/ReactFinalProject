import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://media.gq.com/photos/5a04f9a398002d2e253679f5/master/pass/fall-hats-gq-style-0816-01-1.jpg',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rw-waterproof-jackets-1597863491.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/092719-sneakers-1569598764.png?crop=1.00xw:1.00xh;0,0&resize=1200:*',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: 'https://s.hdnux.com/photos/01/12/67/36/19625870/6/rawImage.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://www.themodestman.com/wp-content/uploads/2020/02/Best-mens-spring-jackets.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
        
    );
  }
}

export default Directory;
