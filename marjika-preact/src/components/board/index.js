import { h, Component } from 'preact';
import style from './style';
import Tile from '../tile';
//import letters from './letters.json';

class Board extends Component {
    state={
        value: "a",
        points: 1,
        used: false
    };

    render() {
        return (
            <div class={style.board}
                style={{
                    padding: 5,
                    margin: 5,
                    maxWidth: '50%',
                    height: '100%'
                }}
            >
                {this.props.letters.map(letter => (
                    <Tile value={letter.value}
                        points={letter.points}
                        clicked={this.state.used}
                        color={'aqua'}
                    ></Tile>
                ))}
            </div>
        );
    }
}

export default Board;