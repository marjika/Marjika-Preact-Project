import { Component } from 'preact';
import style from './style';

class Tile extends Component {
    state={
        used : false
    };

    letterClicked = id => {
        if (!this.state.used) {
            this.setState({used : true});
            var nextArray = []
            if (id===0) {nextArray.push(1, 4, 5);}// (x+1, x+4, x+5)
            if (id===1) {nextArray.push(0, 2, 4, 5, 6);} // (x-1, x+1, x+3, x+4, x+5)
            if (id===2) {nextArray.push(1, 3, 5, 6, 7);} // (x-1, x+1, x+3, x+4, x+5)
            if (id===3) {nextArray.push(2, 6, 7);} // (x-1, x+3, x+4)
            if (id===4) {nextArray.push(0, 1, 5, 8, 9);} // (x-4, x-3, x+1, x+4, x+5)
            if (id===5) {nextArray.push(0, 1, 2, 4, 6, 8, 9, 10);} //(x-5,x-4,x-3,x-1,x+1,x+3,x+4,x+5)
            if (id===6) {nextArray.push(1, 2, 3, 5, 7, 9, 10, 11);} // (x-5,x-4,x-3,x-1,x+1,x+3,x+4,x+5)
            if (id===7) {nextArray.push(2, 3, 6, 10,11);} // (x-5,x-4,x-1,x+3,x+4)
            if (id===8) {nextArray.push(4, 5, 9, 12, 13);} // (x-4, x-3, x+1, x+4, x+5)
            if (id===9) {nextArray.push(4, 5, 6, 8, 10, 12, 13, 14);} // (x-5,x-4,x-3,x-1,x+1,x+3,x+4,x+5)
            if (id===10) {nextArray.push(5, 6, 7, 9, 11, 13, 14, 15);} // (x-5,x-4,x-3,x-1,x+1,x+3,x+4,x+5)
            if (id===11) {nextArray.push(6, 7, 10, 14, 15);} // (x-5,x-4,x-1,x+3,x+4)
            if (id===12) {nextArray.push(8, 9, 13);} // (x-4, x-3, x+1)
            if (id===13) {nextArray.push(8, 9, 10, 12, 14);}  //(x-5, x-4, x-3, x-1, x+1)
            if (id===14) {nextArray.push(9, 10, 11, 13, 15);} // (x-5, x-4, x-3, x-1, x+1)
            if (id===15) {nextArray.push(10, 11, 14);} // (x-5, x-4, x-1)
            console.log(nextArray);
            console.log(id, this.props.value);
            return nextArray;
        }
    }

    render() {

    return (
            <div class={style.tile}>
                <button disabled={this.state.used} onClick={(event) => { this.props.recordLetter(this.props, this.letterClicked(this.props.id));}}
                    style={{
                        padding: 5,
                        margin: 5,
                        width: '20%',
                        float: 'left',
                        background: this.props.color,
                        boxShadow: '0 1px 5px rgba(0,0,0,0.5)'
                    }}
                >
                    <div style={{ fontSize: '5em' }}>{this.props.value}</div>
                    <div style={{ float: 'right', fontSize: '1em' }}>{this.props.points}</div>
                </button>

            </div>
    )
}

};

export default Tile;