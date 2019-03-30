import { h, Component } from 'preact';
import style from './style';

const Tile = props => (



            <div class={style.tile}>
                <h3>{props.value}</h3>
                <h5>{props.points}</h5>

            </div>

);

export default Tile;