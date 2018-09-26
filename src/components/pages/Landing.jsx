import React from 'react';
import { withRouter } from 'react-router';
import { Menu, Container, Image, Icon, Header, Card, Button } from 'semantic-ui-react'
import { name, linkedin, github, email, intro } from '../../constants/profile';
import { Projects } from '../../constants/projects';
import  Project  from '../components/Project'



class Landing extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;
    const mail = "mailto:" + email;

    return (
      <div >
        <Menu pointing secondary fixed container>
          <Menu.Item>
            <h1 className='title'>{name}</h1>
          </Menu.Item>
          <Menu.Item position='right' name='Linkedin'>
            <a href={linkedin}>
              <Icon size="huge" name='linkedin' />
            </a>
          </Menu.Item>

          <Menu.Item
            name='Github'
          >
            <a href={github}>
              <Icon size="huge" name='github' />
            </a>

          </Menu.Item>

          <Menu.Item
            name='Email'
          >
            <a href={mail}>
              <Icon size="huge" name='mail' />
            </a>
          </Menu.Item>
        </Menu>
        <div class="imageContainer">
          <Image className='blurb-image' fluid src='/images/blurb.jpg'>
          </Image>
        </div>
        <div className="section">
          <Container textAlign='center'>
            <Header className="title">Hello World</Header>
            <p className='contentText'>{intro}</p>
          </Container>
        </div>
        <div className="section lightGray">
          <Container textAlign='center'>
            <Header className='title'>Featured Work</Header>
            <Card.Group>
              {Projects.map((project, index) =>
                <Project key={index} project={project} />)}
            </Card.Group>
            <Button fluid color='red'>See More</Button>

          </Container>
        </div>
      </div>
    )
  }
}


export default withRouter(Landing);
