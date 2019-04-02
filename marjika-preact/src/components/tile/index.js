import { h, Component } from 'preact';
import style from './style';

class Tile extends Component {
    state={
        
    };

    letterClicked = id => {
        //if (this.state.letters.includes(id)) {
            //const letter = props.letters.filter(item => item === id);
            console.log(this.props.value);
        //}
    }

    render() {

    return (
            <div class={style.tile}>
                <button onClick={(event) => { this.letterClicked(this.props.value); this.props.recordLetter(this.props);}}
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