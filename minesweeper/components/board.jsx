import React from 'react';
import Tile from './tile';
import * as Minesweeper from '../minesweeper';

class Board extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        
        return (
            <div>
                {this.props.board.grid.map((row, idx1) => {
                    return (
                        <div key={idx1}>
                            {row.map((tile, idx2) => {
                                debugger
                                return (
                                    // debugger
                                    <div key={idx2}>
                                    <Tile
                                        tile={tile}
                                        updateGame={this.props.updateGame}
                                        key={idx2}
                                    />       
                                    </div>                   
                                    )
                                })
                            }
                        </div>
                        )
                    })
                }   
            </div>
        )
    }
}

export default Board;