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
                                    <div>
                                    <Tile
                                        key={idx2}
                                        tile={tile}
                                        updateGame={this.updateGame} 
                                    />       
                                    </div>                   
                                    )
                                })
                            };
                        </div>
                        )
                    })
                }   
            </div>
        )
    }
}

export default Board;