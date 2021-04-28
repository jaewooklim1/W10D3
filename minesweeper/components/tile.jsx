import React from 'react';

class Tile extends React.Component{
    constructor(props){
        super(props);
    }


    
    

    render() {
         
        if(this.props.flagged) return <div className="tile">F</div>
        if(this.props.explored) {

            if(this.props.bombed) return <div className="tile">B</div>
        }else {
            return <div className="tile">E</div>
        } 
        
    }
}

export default Tile;