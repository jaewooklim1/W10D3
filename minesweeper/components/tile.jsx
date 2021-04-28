import React from 'react';

class Tile extends React.Component{
    constructor(props){
        super(props);
        // this.state = {
        //     bombed: false,
        //     flagged: false,
        //     explored: false
        // }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        // e.preventDefault();
        // this.setState(
        //     {explored: true}
        // );

        let boolean;
        if (e.altKey) {
            boolean = true;
        } else {
            boolean = false;
        }
        this.props.updateGame(this.props.tile, boolean)
        
    }

    render() {

        debugger
         
        if (this.props.tile.flagged) {
            return <div className="flagged">F</div> 
        } else if (this.props.tile.explored) {

            if (this.props.tile.bombed) {
                return <div className="bombed">B</div>
            } else {
                return <div className="explored">E</div>
            }
        }

        // } else {    
        //     debugger
        // }
        
        return (<div className='unexplored' onClick={this.handleClick}> </div>
        );
    }
}

export default Tile;