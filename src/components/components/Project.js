import React from 'react';
import { Card, Grid, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link, NavLink } from 'react-router-dom';

class Project extends React.Component {
    render() {
        return (
            <Card className="card">
                <Grid verticalAlign='middle' columns={2}>
                    <Grid.Column>
                        <Image className="cardImage" fluid src={this.props.project.image} />
                    </Grid.Column>
                    <Grid.Column className='cardContent'>
                        <p className='cardTitle'>{this.props.project.title}</p>
                        <p className='cardText'>{this.props.project.summary}</p>
                    </Grid.Column>
                </Grid>
            </Card>

        );
    }
}

Project.propTypes = {
    project: PropTypes.object.isRequired,
};

export default Project;