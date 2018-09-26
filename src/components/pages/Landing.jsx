import React from 'react';
import { withRouter } from 'react-router';
import { Menu, Segment, Dropdown, Image, Icon } from 'semantic-ui-react'

class Landing extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;
    const options = [
      { key: 1, text: 'Choice 1', value: 1 },
      { key: 2, text: 'Choice 2', value: 2 },
      { key: 3, text: 'Choice 3', value: 3 },
    ]

    return (
      <div>
        <Menu pointing secondary fixed container>
          <Menu.Item>
            <h1 className='title'>Jonathan Lau</h1>
          </Menu.Item>
          <Menu.Item position='right' name='Linkedin'>
            <Icon name='linkedin' />
          </Menu.Item>

          <Menu.Item
            name='Github'
          >
            <Icon name='github' />
          </Menu.Item>

          <Menu.Item
            name='Email'
          >
            <Icon name='mail' />
          </Menu.Item>
          <Menu.Item>
            <Menu compact>
              <Dropdown icon='align justify' options={options} simple item />
            </Menu>
          </Menu.Item>
        </Menu>
        <div class="imageContainer">
          <Image className='blurb-image' fluid src='/images/blurb.jpg'>
          </Image>
          <div className="blurb-header">Software Engineer</div>
        </div>
      </div>
    )
  }
}


export default withRouter(Landing);
