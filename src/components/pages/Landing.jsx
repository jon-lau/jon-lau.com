import React from 'react';
import { withRouter } from 'react-router';
import { Menu, Container, Image, Icon, Header, Card, Grid } from 'semantic-ui-react'
import { name, linkedin, github, email, intro } from '../../constants/profile';


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
              <Card className="card">
                <Grid verticalAlign='middle' columns={2}>
                  <Grid.Column>
                    <Image className="cardImage" fluid src='/images/micromouse.jpg' />
                  </Grid.Column>
                  <Grid.Column className='cardContent'>
                    <p className='cardTitle'>Micromouse</p>
                    <p className='cardText'>Micromouse is a competition which tasks teams to design and program an autonomous (mouse) robot to find the fastest path to the center of a 16 by 16 cell maze. The objective of this project is to produce a micromouse which can perform at a high level of competition.</p>
                  </Grid.Column>
                </Grid>
              </Card>
              <Card className="card">
                <Grid verticalAlign='middle' columns={2}>
                  <Grid.Column>
                    <Image className="cardImage" fluid src='/images/micromouse.jpg' />
                  </Grid.Column>
                  <Grid.Column className='cardContent'>
                    <p className='cardTitle'>Micromouse</p>
                    <p className='cardText'>Micromouse is a competition which tasks teams to design and program an autonomous (mouse) robot to find the fastest path to the center of a 16 by 16 cell maze. The objective of this project is to produce a micromouse which can perform at a high level of competition.</p>
                  </Grid.Column>
                </Grid>
              </Card>
            </Card.Group>
          </Container>
        </div>
      </div>
    )
  }
}


export default withRouter(Landing);
