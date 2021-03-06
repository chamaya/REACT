import React, { Component } from 'react';
import {Grid, Col, Image} from 'react-bootstrap';
import './About.css';

export default class About extends Component {
    render() {
        return (
            <div>
                <Image src='assets/banner.png' className='header-image' />
                <Grid>
                    <Col xs={12} sm={8} smOffset={2}>
                        <Image src="assets/tic-tac-toe.png" className="about-profile-pic" rounded />
                        <h3>Rules and History</h3>
                        <p>Tic-tac-toe (also known as noughts and crosses or Xs and Os) is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.</p>
                        <p>Games played on three-in-a-row boards can be traced back to ancient Egypt, where such game boards have been found on roofing tiles dating from around 1300 BCE.</p>
                        <p>An early variation of tic-tac-toe was played in the Roman Empire, around the first century BC. It was called terni lapilli (three pebbles at a time) and instead of having any number of pieces, each player only had three, thus they had to move them around to empty spaces to keep playing. The game's grid markings have been found chalked all over Rome. Another closely related ancient game is Three Men's Morris which is also played on a simple grid and requires three pieces in a row to finish, and Picaria, a game of the Puebloans.</p>
                        <p>The different names of the game are more recent. The first print reference to "noughts and crosses", the British name, appeared in 1864. In his novel Can You Forgive Her? (1864) Anthony Trollope refers to a clerk playing "tit-tat-toe". The first print reference to a game called "tick-tack-toe" occurred in 1884, but referred to "a children's game played on a slate, consisting in trying with the eyes shut to bring the pencil down on one of the numbers of a set, the number hit being scored". "Tic-tac-toe" may also derive from "tick-tack", the name of an old version of backgammon first described in 1558. The U.S. renaming of "noughts and crosses" as "tic-tac-toe" occurred in the 20th century.</p>
                        <p>In 1952, OXO (or Noughts and Crosses), developed by British computer scientist Alexander S. Douglas for the EDSAC computer at the University of Cambridge, became one of the first known video games. The computer player could play perfect games of tic-tac-toe against a human opponent.</p>
                        <p>In 1975, tic-tac-toe was also used by MIT students to demonstrate the computational power of Tinkertoy elements. The Tinkertoy computer, made out of (almost) only Tinkertoys, is able to play tic-tac-toe perfectly. It is currently on display at the Museum of Science, Boston.</p>
                    </Col>
                </Grid>
            </div>
        );
    }
}
