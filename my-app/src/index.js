import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
  function Square (props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      return( <Square 
        value={this.props.squares[i]}
        //key={i}
      onClick={() => this.props.onClick(i)}
      />
      );
    }
  
    render() {

      return(<div>
        {this.createSquares()}
      </div>);

      /**return (
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
      **/
    }

    createSquares(){
      var rows = [];
      for(var i = 0; i < 3; i++){
        var squares = []
        for(var j = 0; j < 3; j++){
          squares.push(this.renderSquare(j + i*3));
        }
        rows.push(
        <div className="board-row">
          {squares}
        </div>
        );
      }
      return rows;
    }

  }
  
  class Game extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        pos: [{
          coor: Array(2).fill(null)
        }],
        history: [{
          squares: Array(9).fill(null),
        }],
        xIsNext: true,
        stepNumber: 0,
        isOrdered: true,

      };
    }

    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);
      const pos = this.state.pos;
      const current_pos = pos[this.state.stepNumber];
      
      const moves = history.map((step, move) => {
        const desc = move ?
        "(" + pos[move].coor + "): " + 'Go to move #' + move + " ":
          'Go to game start';
        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move) } id="submit">{desc}</button>
          </li>
        );
      });

      if(pos.length > 1){
        const desc = "(" + pos[moves.length - 1].coor + "): " + 'Go to move #' + (moves.length - 1) + " ";
        moves[moves.length - 1] = (
        <li key={moves.length}>
        <button onClick={() => this.jumpTo(moves.length-1)} id="submitlast">{desc}</button>
        </li>
        );
      }

      let status;
      if (winner){
        status = 'Winner: ' + winner;
      } else{
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }
      return (
        <div className="game">
          <div className="game-board">
            <Board 
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>
            {status}
            </div>
            <ol reversed = {!this.state.isOrdered}>{moves}</ol>
          </div>
        </div>
      );

    }

    handleClick(i){
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      const pos = this.state.pos.slice(0, this.state.stepNumber +  1);
      const current_pos = pos[pos.length - 1];
      const coor = current_pos.coor.slice(); 

      if (calculateWinner(squares) || squares[i]){
        return;
      }
      coor[1] = (i % 3) + 1;
      coor[0] = Math.floor(i / 3) + 1;
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        history: history.concat([{
          squares: squares,
      }]),
        pos: pos.concat([{
          coor:coor,
        }]),
        stepNumber:history.length,
        xIsNext: !this.state.xIsNext,
      });
    }
    jumpTo(step){
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0,
      });
      
    }

    changeIsOrdered(){
      this.state.isOrdered = !this.state.isOrdered;
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  