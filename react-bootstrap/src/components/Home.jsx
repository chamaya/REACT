import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h2> Welcome to the Game of all Games</h2>
                    <p> Get ready for the experience of all experiences</p>
                    <Link to='/about'>
                        <Button bsStyle="primary">About</Button>
                    </Link>
                </Jumbotron>
                <Row className='show-grid text-center'>
                    <Col xs={12} sm={4} className='person-wrapper'>
                        <Image src="assets/clock.jpg" circle className='profile-pic' />
                        <h3>Tic</h3>
                        <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just need to push them out</p>
                    </Col> 
                    <Col xs={12} sm={4} className='person-wrapper'>
                        <Image src="assets/tack.jpg" circle className='profile-pic' />
                        <h3>Tac</h3>
                        <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just need to push them out</p>
                    </Col> 
                    <Col xs={12} sm={4} className='person-wrapper'>
                        <Image src="assets/Toe.jpg" circle className='profile-pic' />
                        <h3>Toe</h3>
                        <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just need to push them out</p>
                    </Col> 
                </Row>          
            </Grid>
        );
    }
}

