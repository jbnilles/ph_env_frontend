import React from 'react';
import Board from './Board';
import { connect } from 'react-redux';
import { move } from './../../actions';
class TTTBoard extends React.Component {
  constructor(props) {
    super(props);
  }
   
  /*componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall()); 
  }*/
    handleTdClick(event) {
        console.log(this) 
     event.target.value = this.props.xIsNext ? 'X' : 'O' 
     /*const { dispatch } = this.props; 
     dispatch(move);*/
     
    }

    handleClick(i) {
        console.log(this.props)
        const history = this.props.history.slice(0, this.props.turnNumber + 1);
        const current = history[history.length - 1];
        console.log(history)
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.props.xIsNext ? 'X' : 'O';
        const { dispatch } = this.props;
        const action = {
            type: "MOVE",
            history: history.concat([{
                squares: squares
            }]),
            turnNumber: history.length,
            xIsNext: !this.props.xIsNext,
        }
        dispatch(action);
    }

    jumpTo(turn) {
        const { dispatch } = this.props;
        const action = {
            type: "JUMP_TO",
            history: this.props.history,
            turnNumber: turn,
            xIsNext: (turn % 2) === 0,
        }
        dispatch(action);
    }


    



    
    render() {
        const history = this.props.history;
        const current = history[this.props.turnNumber];
        console.log(current)
        const winner =  calculateWinner(current.squares);
        const moves = history.map((turn, move) => {
            const desc = move ?
                'Go to turn #' + turn :
                'Go to game start';
            return (
                <li key={turn}>
                    <button onClick={() => this.jumpTo(turn)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.props.xIsNext ? 'X' : 'O');
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
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }

    /*render() {
      console.log(this.props)
    const { error, isLoaded, history } = this.props;
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (isLoaded) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return (
          <React.Fragment>
              <h1>Test</h1>

          <div>
                  <table>
                      <tbody>
        <tr>
                          <td onClick={this.handleTdClick } id="0_0">1212</td>
            <td id="0_1"></td>
            <td id="0_2"></td>
        </tr>
        <tr>
            <td id="1_0"></td>
            <td id="1_1"></td>
            <td id="1_2"></td>
        </tr>
        <tr>
            <td id="2_0"></td>
            <td id="2_1"></td>
              <td id="2_2"></td>
                          </tr>
                      </tbody>
    </table>
</div>
        </React.Fragment>
      );
    }
  }*/
}

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

const mapStateToProps = state => {
  return {
    history: state.history,
    isLoading: state.isLoading,
    error: state.error,
      xIsNext: state.xIsNext,
    turnNumber: state.turnNumber
  }
}

export default connect(mapStateToProps)(TTTBoard);