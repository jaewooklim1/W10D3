import React from 'react';
import Board from './board';
import * as Minesweeper from '../minesweeper';
// import { Tile as Minesweeper } from '../minesweeper';

class Game extends React.Component{
    constructor(props) {
        // debugger
        super(props);
        const board = new Minesweeper.Board(10, 10);
        this.state = { board: board };
        this.updateGame = this.updateGame.bind(this);
    }

    updateGame() {

    }

    render() {
        console.log("game.jsx");
        debugger
        return (
            <h1>
                <p></p>
                    <Board 
                    board={this.state.board}
                    updateGame={this.updateGame}
                    />
                {/* {this.state.board}  */}
                {/* /* {this.updateGame} */}
            </h1>
        )
    }
}

export default Game;