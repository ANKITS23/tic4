import React from 'react'
import Square from './Square'
import Helper from './Helper'

const X = 'X';
const O = 'O';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null), //array= ["","","",""]
      xIsNext: true,
      winCount : { X: 0, O: 0 },
    };
  }

  handleClick(i) {
  
    const squares = this.state.squares.slice();  // To create a copy of the squares array to modify 
    squares[i] = this.state.xIsNext ? X : O;
    // step = this.state.squares ? X : O;
    console.log(squares[i])
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
   
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render(i) {
    const winner = Helper(this.state.squares);
    const step = this.state.squares;

    let W;
    let S =[];
    let status;
    if (winner){
       W = "winner "  + winner ;
       S = step ;
      console.log(winner);
    }
    else if(!winner){
      status="There has been a draw";
    }

    return (
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

        <div className='winner'> {W} </div>

        <div className='status'>{status}</div>

        <div className='pattern'>Number of Turns : {S}</div>
        
      </div>
    );
  }
}