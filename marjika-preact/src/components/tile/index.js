import { h } from 'preact';
import style from './style';

const Tile = props => (

            <div class={style.tile}>
                <button
                    style={{
                        padding: 5,
                        margin: 5,
                        width: '20%',
                        float: 'left',
                        background: props.color,
                        boxShadow: '0 1px 5px rgba(0,0,0,0.5)'
                    }}
                >
                    <div style={{ fontSize: '5em' }}>{props.value}</div>
                    <div style={{ float: 'right', fontSize: '1em' }}>{props.points}</div>
                </button>

            </div>

);

export default Tile;