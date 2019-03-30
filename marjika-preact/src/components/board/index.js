import { h, Component } from 'preact';
import style from './style';
import Tile from '../tile';

export default class Board extends Component {
    state={
        value: "a",
        points: 1,
        used: false,
        frequency: 0
    };



    render() {
        return (
            <div class={style.board}>
                <h1>Board Component</h1>
                <Tile value={this.state.value}
                      points={this.state.points}
                ></Tile>
            </div>
        );
    }
}