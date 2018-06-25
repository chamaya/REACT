import React, { Component } from 'react';
import './Life.css';
import {Grid, Row, Col, Image} from 'react-bootstrap';

export default class Life extends Component {
    render() {
        return (
            <div>
                <Image src='assets/mountain-man.jpg' className='header-image' />
                <Grid>
                    <h2> Life: </h2>
                    <Row>
                        <Col xs={12} sm={8} className="main-section">
                            <p>That's what makes life fun. That you can make these decisions. That you can create the world that you want. You can work and carry-on and put lots of little happy things in here. I thought today we would do a happy little picture. With something so strong, a little bit can go a long way.</p>
                            <p>This is a happy place, little squirrels live here and play. You have to make almighty decisions when you're the creator. It is a lot of fun. Trees cover up a multitude of sins. Now let's put some happy little clouds in here. It looks so good, I might as well not stop.</p>
                            <p>I like to beat the brush. It's hard to see things when you're too close. Take a step back and look. You don't have to spend all your time thinking about what you're doing, you just let it happen. The first step to doing anything is to believe you can do it. See it finished in your mind before you ever start. Everybody's different. Trees are different. Let them all be individuals. I'm sort of a softy, I couldn't shoot Bambi except with a camera.</p>
                        </Col>
                        <Col xs={12} sm={4} className="sidebar-section">
                            <Image src="assets/bob.jpg"/>
                            <p>That's what makes life fun. That you can make these decisions. That you can create the world that you want. You can work and carry-on and put lots of little happy things in here. I thought today we would do a happy little picture. With something so strong, a little bit can go a long way.</p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
